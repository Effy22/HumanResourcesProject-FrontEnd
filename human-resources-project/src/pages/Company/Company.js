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
    const [companyList, setCompanyList] = useState({
        token: '',
    });
    const [companyApplingList, setCompanyApplingList] = useState({
        token: '',
    } );

    const takenToken = localStorage.getItem('jwtToken');

    useEffect(() => {
        dispatch(fetchViewCompanies(takenToken));
        dispatch(fetchViewCompaniesAppling(takenToken));

    }, [dispatch,takenToken]); 

    // Menü öğesine tıklandığında tetiklenecek fonksiyon
    const handleMenuItemClick = (id) => {
        setMenuId(id); // State'i güncelle
    };

    const handleViewCompaniesClick = () => {
        setCompanyList({
            ...companyList,
            token: takenToken
        });
        dispatch(fetchViewCompanies(companyList));
    };
    const handleViewCompaniesApplingClick = () => {
        setCompanyApplingList({
            ...companyApplingList,
            token: takenToken
        });
        dispatch(fetchViewCompaniesAppling(companyApplingList));
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