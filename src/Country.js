import React , { Usestate, useState } from 'react';
import './Country.css'

function Country()
{
    const [city , setcity] = useState([])
    const countries = [
        {
            country : 'India',
            code : 'IN',
            cities : ['Delhi','Mumbai','Bangalore','Hyderabad','Ahmedabad','Chennai','Kolkata','Surat','Pune','Jaipur']
        },
        {
            country : 'China',
            code : 'CN',
            cities : ['Shanghai','Beijing','Guangzhou','Shenzhen','Chengdu','Tianjin','Chongqing','Nanjing','Wuhan',"Xi'an"]
        },
        {
            country : 'Australia',
            code : 'AU',
            cities : ['Melbourne','Sydney','Brisbane','Perth','	Adelaide','Gold Coast–Tweed Heads','Newcastle–Maitland','Canberra–Queanbeyan','Sunshine Coast','Central Coast']
        },
        
        {
            country : 'Sri Lanka',
            code : 'SL',
            cities : ['Colombo','Dehiwala-Mount Lavinia','Moratuwa','Sri Jayawardenepura Kotte','Negombo','Kandy','Kalmunai','Vavuniya','Galle','Trincomalee']
        }
    ]
    
    function showstate()
    {
        let getcode = document.querySelector('#country').value;
        let newcode = countries.filter((cntry) => {
                        return cntry.country===getcode 
                        
                    })
        setcity(newcode[0].cities);
    }

    return(
        <div className='box'>
            <select id='country' onChange={showstate}>
                <option selected disabled>Select Country</option>
                {
                    countries.map(ctr => {
                        return <option key={ctr.code}>{ctr.country}</option>
                    })
                }
            </select>
            {console.log(city)}
            <select>{city.map((cty,index) => {
                        return <option key={index}>{cty}</option>
            })}</select>
        </div>
    )
}

export default Country;