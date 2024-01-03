import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../authoProvider/AuthProvider';

const SelectBike = () => {
    const [typeData, setTypeData] = useState([])
    const [enableYear, setEnableYear] = useState(false)
    const [yearData, setYeardata] = useState([])
    const [enableBrand, setEnableBrand] = useState(false)
    const [brandData, setBrandData] = useState([])
    const [brands, setBrand] = useState([])
    const [enableModel, setEnableModel] = useState(false)
    const [modelData, setModelData] = useState([])
    const [models, setModels] = useState([])
    const [enableSelectBtn, setEnableSelectBtn] = useState(false)
    const { mobile, BikeData } = useContext(AuthContext)

    const handleTypeChange = (e) => {
        const type = e.target.value
        if (type === 'Type') {
            setEnableYear(false)
            setEnableBrand(false)
            setEnableModel(false)
            setEnableSelectBtn(false)
        }
        else if (type !== 'Type') {

            setEnableYear(true)
            const typeFilter = BikeData.filter(eachType => eachType.type === type)
            setTypeData(typeFilter)
        }

    }
    const handleYearChange = (e) => {
        const targetYear = e.target.value
        if (targetYear !== '') {
            setEnableBrand(true)
            const brandFilter = typeData.filter(every => parseInt(every.year) === parseInt(targetYear))
            setBrandData(brandFilter)
        }

    }
    const handleBrandChange = (e) => {
        const targetModel = e.target.value;
        setEnableModel(true)
        if (targetModel !== '') {
            const modelFilter = brandData.filter(every => every.brand === targetModel)
            setModelData(modelFilter)
        }
    }
    const handleMybike = ()=>{
        const myBike = document.querySelector("#Model").value
        localStorage.setItem("myBike",myBike);
    }

    useEffect(() => {
        if (enableYear && typeData) {
            // const yearOptions = typeData.map(every => every.year);
            const yearOptions = [...new Set(typeData.map(every => every.year))];
            setYeardata(yearOptions);
            // console.log(yearOptions);
        }
        if (enableBrand && brandData) {
            const uniqueBrandOptions = [...new Set(brandData.map(every => every.brand))];
            setBrand(uniqueBrandOptions);
        }
        if (enableModel && modelData) {
            const modelsFilter = modelData.map(every => every.model);
            setModels(modelsFilter)
            setEnableSelectBtn(true)
        }
    }, [enableYear, typeData, brandData, enableBrand, modelData, enableModel]);




    return (
        <div className='border rounded-lg w-[80%] flex justify-center items-center h-[150px] flex-col gap-5'>
            <div className='flex justify-center gap-3 text-[#1c4775]'>
                <h1>Select Your Bike</h1>
                <div> &#x2699; Garage,  <a href="#">Log in To See your Saved Bike</a> </div>
            </div>
            <div id='bikeSorter' className='bikeSorter flex justify-center gap-10'>
                <select name="types" id="types" onChange={handleTypeChange}>
                    <option value="Type" >Type</option>
                    <option value="Standard" id='Standard'>Standard</option>
                    <option value="Sport Touring" id='SportTouring'>Sport Touring</option>
                    <option value="Cruiser" id='Cruiser'>Cruiser</option>
                    <option value="Adventure" id='Adventure'>Adventure</option>
                    <option value="Dual Sport" id='Dual Sport'>Dual Sport</option>
                    <option value="Sports Bike" id='SportsBike'>Sports Bike</option>
                </select>
                <select name="years" id="years" disabled={!enableYear ? true : false} onChange={handleYearChange}>
                    {
                        yearData?.map((every, idx) => <option key={idx}>{every}</option>)
                    }
                </select>
                <select name="Brands" id="Brands" disabled={!enableBrand ? true : false} onClick={handleBrandChange}>
                    {
                        brands?.map((every, idx) => <option key={idx}>{every}</option>)
                    }
                </select>
                <select name="Model" id="Model" disabled={!enableModel ? true : false}>
                    {
                        models?.map((every, idx) => <option key={idx}>{every}</option>)
                    }
                </select>
                <button disabled={!enableSelectBtn ? true : false} onClick={handleMybike}>Select</button>
            </div>
        </div>
    );
};

export default SelectBike;