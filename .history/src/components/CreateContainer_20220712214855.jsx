import React, { useState } from 'react';

const CreateContainer = () => {

    const [title, setTitle] = useState("");
    const [calories, setCalories] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState(null);
    const [fields, setFields] = useState(true);
    const [alertStatus, setAlertStatus] = useState("danger");
    const [msg, setMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [imageAsset, setImageAsset] = useState(null);

    return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <div className='w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center'>
                {
                    fields && (
                        <p className={`w-full p-2 rounded-lg text-center ${alertStatus === 'danger' ?'bg-red-400 text-red-800' : 'bg-emerald'}`}></p>
                    )
                }
            </div>
        </div>
    );
};

export default CreateContainer;