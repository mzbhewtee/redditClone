export default function PageHeader(){
    return(
        <>
        <div className="h-40 bg-cover" style={{ backgroundImage: 'url(https://styles.redditmedia.com/t5_2qh48/styles/bannerBackgroundImage_kmald2thhtj71.jpg?width=4000&format=pjpg&s=89898985d5c48cbd6170e20685077ed5f7ea8060)' }}>
        </div>
        <div className="bg-gray-900">
                <div className="mx-6 relative flex">
                    <div className="h-20 w-20 rounded-full overflow-hidden relative -top-5">
                        <img src="https://styles.redditmedia.com/t5_2u3ta/styles/communityIcon_oxu25b0kn1z41.png?width=256&s=8f3bf4200037d3e35eeca6005791f17d4d5b5f28" alt=""></img>
                    </div>
                    <div className='pl-4 pt-2'>
                        <h1 className="text-white text-3xl">Techies on the Rise!</h1>
                        <h5 className="text-gray-400">r/young_techies</h5>
                    </div>
                </div>
            </div></>
    );
}
