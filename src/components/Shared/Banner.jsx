import { ReactTyped } from "react-typed";

const Banner = () => {
    return (
        <div name="home" className="text-white">
            <div className="max-w-[800px] w-full h-screen mt-[-96px] mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-semibold mt-16 p-2">Growing With Data Analytics</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-4">Grow with data</h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Fast, Flexible Financing For</p>
                    <ReactTyped
                        className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                        strings={['BTB', 'BTC', 'SASS']}
                        typedSpeed={500}
                        backSpeed={500}
                        loop />
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500">Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
            </div>
        </div>
    );
};

export default Banner;