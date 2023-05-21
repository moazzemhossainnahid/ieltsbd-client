import React from 'react';

const LimitedLearningBanner = () => {
    return (
        <div className="bg-[url('https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Education-Benifits-3.jpg')] bg-fixed h-screen w-full bg-cover bg-center">
        <div className="flex flex-col justify-center items-center h-full">
        <a class="video-link absolute" target="_blank" href="https://www.youtube.com/watch?v=ad9A4JvEgNc" rel="nofollow"><img width="120" height="120" src="https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Video-Icon.png" class="attachment-full size-full" alt="" srcset="https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Video-Icon.png 120w, https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Video-Icon-100x100.png 100w" sizes="(max-width: 120px) 100vw, 120px" data-no-retina=""/></a>
        <div className="text-white flex flex-col justify-start items-center p-10 h-full w-full">
            <div className="w-full">
            <h3 className="text-xl ">EDUCATION BENIFITS</h3> 
            </div>
            <div className="w-full">
            <h3 className="text-3xl ">Limitless Learning And Get More Possibilities</h3>
            </div>   
        </div>
        </div>

        </div>
    );
};

export default LimitedLearningBanner;