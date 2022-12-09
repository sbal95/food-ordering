import React from 'react'

const Input = (props) => {
    const { type, errorMessage, touched, placeholder, ...inputProps } = props;
    return (
        <div className='w-full '>
            <label className='relative block cursor-text w-full'>
                {type === "datetime-local" ? < input type={type}
                    name=''
                    className='h-14 w-full border border-primary rounded-lg
              outline-none px-4 peer '
                    required
                    {...inputProps}
                /> : <input type={type}
                    name=''
                    className={`h-14 w-full border rounded-lg 
                    outline-none px-4 peer pt-2 
                    ${touched && errorMessage ? "border-danger" : "border-primary"}`}
                    required
                    {...inputProps}
                />}

                {type === "datetime-local" ? <span className='absolute top-0 left-0 px-4  text-sm flex items-center h-full peer-focus:h-6   peer-focus:text-xs text transition-all peer-valid:h-7  peer-valid:text-xs'>
                </span> : <span className='absolute top-0 left-0 px-4 text-sm flex items-center h-full peer-focus:h-6 peer-focus:text-xs text transition-all peer-valid:h-7 peer-valid:text-xs'>
                    {placeholder}
                </span>}
            </label>
            {touched && <span className='text-xs text-danger'>{errorMessage}</span>} 

        </div>
    )
}


export default Input