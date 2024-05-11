import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from '../../components/molecules/Company/Header';
import CompanyList from '../../components/organisms/Company/CompanyList';
import CompanyApplingList from '../../components/organisms/Company/CompanyApplingList';
import MenuList from '../../components/molecules/Company/MenuList';
import {fetchUpdateCompany, fetchViewCompanies, fetchViewCompaniesAppling } from '../../store/feautures/companySlice';
import './Company.css';
import UpdateCompany from "../../components/organisms/Company/UpdateCompany";
import UpdateList from "../../components/organisms/Company/UpdateList";

// Company bileşeni
function Company() {
    const dispatch=useDispatch();
    const [menuId, setMenuId] = useState(0); // Menü ID'sini tutacak state
    const [companyList, setCompanyList] = useState([]);
    const [companyApplingList, setCompanyApplingList] = useState([]);
    const [updateList, setUpdateList] =useState([]);

    useEffect(() => {
        dispatch(fetchViewCompanies());
        dispatch(fetchViewCompaniesAppling());

    }, [dispatch]);

    // Menü öğesine tıklandığında tetiklenecek fonksiyon
    const handleMenuItemClick = (id) => {
        setMenuId(id); // State'i güncelle
    };

    const handleViewCompaniesClick = () => {
        setCompanyList(dispatch(fetchViewCompanies()));
    };
    const handleViewCompaniesApplingClick = () => {
        setCompanyApplingList(dispatch(fetchViewCompaniesAppling()));
    };
    const handleUpdateClick = () => {
        setUpdateList(dispatch(fetchUpdateCompany()));
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
                        {menuId === 2 && <UpdateList updateList={updateList} onMenuItemClick={handleUpdateClick} />}
                    </div>
                </div>
            </div> 
        </>
    );
}


export default Company;