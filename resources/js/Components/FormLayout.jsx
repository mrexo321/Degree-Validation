import React from "react";

export default function Student({ children }) {
    return (
        <div className="min-h-screen p-6 bg-gradient-to-r from-black to-[#2D3436] flex items-center justify-center">
            <div className="container max-w-screen-lg mx-auto">
                <div>
                    <div className="bg-white rounded-xl shadow-lg p-4 px-4 md:p-8 mb-6">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
