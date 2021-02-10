import React from 'react'
import Header from '../components/Header'
import TemplateList from '../components/TemplateList'
export default function BrowsePage() {
    return (
        <>
            <Header />
            <div className="container pb-5 mb-5">
            <div className="container mt-3 pl-4">
                <span className="type-body2 bold">Categoria</span>
                <div className="">
                </div>
            </div>
                    <TemplateList />

                    
            <div className="container mt-3 pl-4">
                <span className="type-body2 bold">Categoria</span>
                <div className="">
                </div>
            </div>
                    <TemplateList />
            </div>

            
            
        </>
    )
}

