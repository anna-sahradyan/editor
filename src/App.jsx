import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/home/Home.jsx";
import {Toaster} from "react-hot-toast";


export const App = () => {
    return (
        <>
            <Toaster
                position={"top-right"}
                toastOptions={{
                    success: {
                        theme: {
                            primary: '#4aed88'
                        }
                    }
                }}

            ></Toaster>
            <div className={'container'}>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                </Routes>
            </div>
        </>
    );
};

