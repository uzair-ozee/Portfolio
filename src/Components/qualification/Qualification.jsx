import React,{useState} from 'react'
import "./qualification.css"
const Qualification = () => {
    const [togglestate,setTogglestate]=useState(1)

    const toggleTab= (index)=>{
        setTogglestate (index)
    }
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__Container container">
                <div className="qualification__tabs">
                    <div className={togglestate === 1 ? "qualification__button qualification__active button--flex"
                    :"qualification__button qualification__active button--flex"} onClick={()=>toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>{""}
                        Education
                    </div>
                    <div className={togglestate === 2 ? "qualification__button qualification__active button--flex"
                    :"qualification__button qualification__active button--flex"} onClick={()=>toggleTab(2)}>

                        <i className="uil uil-briefcase-alt qualification__icon"></i>{""}
                        Experiance
                    </div>
                </div>

                <div className="qualification__sections">
                <div className={togglestate === 1 ? " qualification__content qualification__content-active"
                :"qualification__content"}>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Design</h3>
                                <span className="qualification__subtitle">SMIT</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2022 - present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                        
                                <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                                </div>
                            <div>
                                <h3 className="qualification__title">Art Director</h3>
                                <span className="qualification__subtitle">Sindh University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2020 - present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">SMIT</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                                <div></div>

                                <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                                </div>
                            <div>
                                <h3 className="qualification__title">Ux Expert</h3>
                                <span className="qualification__subtitle">Sindh University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2020 - 2023
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={togglestate === 2 ? " qualification__content qualification__content-active"
                :"qualification__content"}>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Product Design</h3>
                                <span className="qualification__subtitle">Sindh University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2023 - present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                                <div></div>

                                <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                                </div>

                            <div>
                                <h3 className="qualification__title">UX Designer</h3>
                                <span className="qualification__subtitle">Sindh University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2020 - present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Designer</h3>
                                <span className="qualification__subtitle">Sindh University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2022 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                       
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Qualification
