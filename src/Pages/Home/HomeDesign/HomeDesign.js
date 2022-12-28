import React from 'react';

const HomeDesign = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 mb-8 '>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure><img src="https://assets.hardwarezone.com/img/2022/09/apple-iphone-14-pro-and-pro-max-colours.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">iphone 14 pro max</h2>
                        <p>Glass front (Corning-made glass), glass back (Corning-made glass), stainless steel frame</p>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure><img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Samsung_Galaxy_S22_Ultra_specs_camera_display_chipset_Note_design_drdNBC.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">samsung s22 ultra</h2>
                        <p>IT LOOKS LIKE a Note, it acts like a Note. Just don't call it a Note. That's Samsung's new Galaxy S22 Ultra</p>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure><img className='h-[200px] w-full' src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-8316,resizemode-1,msid-94966874/industry/cons-products/electronics/bring-home-the-fully-loaded-vivo-v25-and-capture-your-festive-season-shenanigans-like-never-before.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">vivo v25</h2>
                        <p>Android 12, Funtouch 12
                            Chipset	MediaTek MT6877 Dimensity 900 6 nm
                            CPU	Octa-core 2x2.4 GHz Cortex-A78 & 6x2.0 GHz Cortex-A55</p>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure><img className='h-[200px] w-full' src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-8316,resizemode-1,msid-94966874/industry/cons-products/electronics/bring-home-the-fully-loaded-vivo-v25-and-capture-your-festive-season-shenanigans-like-never-before.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">vivo v25</h2>
                        <p>Android 12, Funtouch 12
                            Chipset	MediaTek MT6877 Dimensity 900 6 nm
                            CPU	Octa-core 2x2.4 GHz Cortex-A78 & 6x2.0 GHz Cortex-A55</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDesign;