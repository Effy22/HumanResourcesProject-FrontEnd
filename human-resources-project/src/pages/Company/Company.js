import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from '../../components/molecules/Company/Header';
import CompanyList from '../../components/organisms/Company/CompanyList';
import CompanyApplingList from '../../components/organisms/Company/CompanyApplingList';
import MenuList from '../../components/molecules/Company/MenuList';
import {fetchViewCompanies, fetchViewCompaniesAppling } from '../../store/feautures/companySlice';
import './Company.css';


// Company bileşeni
function Company() {
    const dispatch=useDispatch();
    const [menuId, setMenuId] = useState(0); // Menü ID'sini tutacak state
    const [companyList, setCompanyList] = useState([]);
    const [companyApplingList, setCompanyApplingList] = useState([]);

    const takenToken = localStorage.getItem('jwtToken');

    useEffect(() => {
        if(takenToken){
             dispatch(fetchViewCompanies(takenToken));
            dispatch(fetchViewCompaniesAppling(takenToken));
        }else{
            console.log("Token not found in localStorage");
        }
    }, [dispatch, takenToken]); 

    // Menü öğesine tıklandığında tetiklenecek fonksiyon
    const handleMenuItemClick = (id) => {
        if(id==3){
            localStorage.removeItem('jwtToken');
            window.location.href= '/';
        }else{
            setMenuId(id);
        }
     
    };

    const handleViewCompaniesClick = async () => {
        const token =localStorage.getItem('jwtToken');
        setCompanyList(dispatch(fetchViewCompanies(token))) ;
    };
    const handleViewCompaniesApplingClick = async () => {
        const token =localStorage.getItem('jwtToken');
        setCompanyApplingList(dispatch(fetchViewCompaniesAppling(token)));
    };

    return (
        <>
            <div className="container">
                <div className="rowC mt-5 p-3 border border-primary arround-1">
                    <Header />
                </div>

                <div className="rowC mt-3 p-3 border border-success">
                    <div className="col=3">
                        {/* Menü bileşenine tetikleyici fonksiyonu ve seçilen menüyü ileteceğiz */}
                        <MenuList onMenuItemClick={handleMenuItemClick} />
                    </div>  
                    <div className="col=9">
                        {/* Seçilen menüye göre ekranda görüntülenecek bileşen */}
                        {menuId === 0 && <CompanyList companyList={companyList} onMenuItemClick ={handleViewCompaniesClick} />}
                        {menuId === 1 && <CompanyApplingList companyApplingList={companyApplingList} onMenuItemClick={handleViewCompaniesApplingClick} />}
                    </div>
                </div>
            </div> 
        </>
    );
}


export default Company;