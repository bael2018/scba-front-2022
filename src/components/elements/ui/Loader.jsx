import '../../../scss/components//elements/ui/loader.css'

const Loader = () => {
    return (
        <div className='loader'>
            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export { Loader }