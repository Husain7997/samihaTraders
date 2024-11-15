import bgimg from '../../assets/bg3.jpeg';

const Options = () => {
    return (
        <div className="flex flex-wrap items-center justify-center rounded my-8 py-4 gap-3"
         style={{ backgroundImage: `url(${bgimg})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
}} >
            <button className="btn glass">Light <img src="data:image/jpeg;base64,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" className='w-10'  alt="" /></button>
            <button className="btn glass">Cable <img src="data:image/jpeg;base64,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" className='w-10' alt="" /></button>
            <button className="btn glass">Fan <img src="data:image/jpeg;base64,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" className='w-10' alt="" /></button>
            <button className="btn glass">Switch <img className="w-10" src="data:image/jpeg;base64,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" alt="" /></button>
        </div>
    );
};

export default Options;