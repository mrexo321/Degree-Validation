import SideTemplate from "@/Components/SideTemplate";

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto bg-white rounded-2xl p-8 w-full shadow-xl">
                <SideTemplate />
                {children}
            </div>
        </div>
    );
};

export default MainLayout;
