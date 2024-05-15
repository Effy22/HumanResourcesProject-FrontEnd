import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from '../../components/molecules/Company/Header';
import CompanyList from '../../components/organisms/Company/CompanyList';
import CompanyApplingList from '../../components/organisms/Company/CompanyApplingList';
import MenuList from '../../components/molecules/Company/MenuList';
import {fetchViewCompanies, fetchViewCompaniesAppling, fetchUpdateCompany, fetchApproveCompany, fetchRejectCompany } from '../../store/feautures/companySlice';
import UpdateCompanyList from "../../components/organisms/Company/UpdateCompanyList";
import './Company.css';


// Company bileşeni
function Company() {
    const dispatch=useDispatch();
    const [menuId, setMenuId] = useState(0); // Menü ID'sini tutacak state
    const [companyList, setCompanyList] = useState([]);
    const [companyApplingList, setCompanyApplingList] = useState([]);
    const [updateCompanyList, setUpdateCompanyList] = useState([]);
    

    const takenToken = localStorage.getItem('jwtToken');

    useEffect(() => {
        if(takenToken){
             dispatch(fetchViewCompanies(takenToken));
            dispatch(fetchViewCompaniesAppling(takenToken));
            dispatch(fetchApproveCompany(takenToken));
            dispatch(fetchRejectCompany(takenToken));
            dispatch(fetchUpdateCompany(takenToken));
        }else{
            console.log("Token not found in localStorage");
        }
    }, [dispatch, takenToken]); 

    // Menü öğesine tıklandığında tetiklenecek fonksiyon
    const handleMenuItemClick = (id) => {
        if(id===4){
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
    const handleUpdateCompanyClick = async () => {
        const token = localStorage.getItem('jwtToken');
        setUpdateCompanyList(dispatch(fetchUpdateCompany(token)));
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
                        {menuId === 2 && <UpdateCompanyList updateCompanyList={updateCompanyList} onMenuItemClick={handleUpdateCompanyClick} />}
                    </div>
                </div>
            </div> 
        </>
    );
}


export default Company;