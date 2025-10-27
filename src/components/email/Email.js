import "./Email.css"


function Email() {
    return(
        <>
            <div className="email-container">
                <h3>فرم ایمیل</h3>
                <input className="input-email" type="text" />
                <button className="btn-email">ارسال</button>
            </div>
        </>
    )
}

export default Email