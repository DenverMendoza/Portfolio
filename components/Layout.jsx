function Layout({children}){
    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-solid border-1 border-black">
            {children}
        </div>
    );
};

export default Layout;