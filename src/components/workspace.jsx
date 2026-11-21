import { useState } from 'react';
import { User, GraduationCap, BriefcaseBusiness,SquarePen } from 'lucide-react'

export default function Workspacecard() {
    const [PersonInfo, setPersonInfo] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        Address: '',
    });

    const [EduBackground, setEduBackground] = useState({
        school: '',

        Degree: '', 
        Year: ''
    });

    const [practicalXp, setpracticalXp] = useState({
        position: '',
        company: '',
        description: '',
        year: ''
    })

    const handleChanges = (e) => {
        const { name, value } = e.target;
        if (e.target.form.classList.contains('section-1')) {
            setPersonInfo(prev => ({...prev, [name]: value}))
        }

        if (e.target.form.classList.contains('section-2')) {
            setEduBackground(prev => ({...prev, [name]: value}))
        }

        if (e.target.form.classList.contains('section-3')) {
            setpracticalXp(prev => ({...prev, [name]: value}))
        }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const section = e.currentTarget.className;

        if (section === 'section-1') {
            console.log(PersonInfo)
            setSubmittedPerson({...PersonInfo})
        } 
        if (section === 'section-2') {
            console.log(EduBackground)
            setSubmittedEducation({...EduBackground})
        }
        if (section === 'section-3') {
            console.log(practicalXp)
            setSubmittedExperience({...practicalXp})
        } 
    }

    const handleEdit_1 = () => {
        setPersonInfo({
            fullName: '',
            email: '',
            phoneNumber: '',
            Address: ''
        })
    }
    const handleEdit_2 = () => {
        setEduBackground({
            school: '',
            Degree: '', 
            Year: ''
        })
    }
    const handleEdit_3  = () => {
        setpracticalXp({
            position: '',
            company: '',
            description: '',
            year: ''
        })
    }

    const [ submittedPerson, setSubmittedPerson ] = useState(null);
    const [ submittedEducation, setSubmittedEducation ] = useState(null);
    const [ submittedExperience, setSubmittedExperience ] = useState(null);

        
       
        
    


    return (
        <div className='main-container'>
        <div className='Container'>
            <form className='section-1' onSubmit={handleSubmit} section='personInfo'>
                <div className='form-head'>
                    <User />
                    <h3>Personal Information</h3>
                    
                </div>

                <div className='form-controls'>
                    <label htmlFor="Full Name">Full Name</label>
                    <input type="text" name='fullName' placeholder="e.g Xcel Aboagye" 
                            onChange={handleChanges} value={PersonInfo.fullName}/>

                    <label htmlFor="Email">Email</label>
                        <input type="email" name='email' placeholder="e.g aboagyexcel@gmail.com" onChange={handleChanges} value={PersonInfo.email}/>

                    <label htmlFor="Phone">Phone</label>
                        <input type="text" name='phoneNumber' placeholder="e.g: 0533257960" onChange={handleChanges} value={PersonInfo.phoneNumber} />

                    <label htmlFor="Address">Address</label>
                        <input type="text" name='Address' placeholder="e.g: UMaT Tarkwa" onChange={handleChanges} value={PersonInfo.Address}/>

                        <button className='edit' type='button' onClick={handleEdit_1}>Edit</button>
                    <button className='submit' type='submit' value='personalInfo'>Submit</button>

                </div>
              


            </form>

            <form className='section-2' onSubmit={handleSubmit}>
                <div  className='form-head'>
                    <GraduationCap/>
                    <h3>Educational Background</h3>
                    
                </div>
                
                <div className='form-controls'>
                    <label htmlFor="school/university">School/University</label>
                        <input type="text" name='school' placeholder="e.g: University of mines and technology" onChange={handleChanges} value={EduBackground.school}/>

                    <label htmlFor="Degree/course">Degree/Course</label>
                        <input type="text" name='Degree' placeholder="e.g: BSC Computer Science" onChange={handleChanges} value={EduBackground.Degree}/>

                    <label htmlFor="Year">Year</label>
                        <input type="date" name='Year' placeholder="e.g: 2024-2028" onChange={handleChanges} value={EduBackground.Year} />

                        <button className='edit' type='button' onClick={handleEdit_2}>Edit</button>
                        <button className='submit' type='submit' value='eduBackground'>Submit</button>
                </div>
                
            </form>

            <form className='section-3' onSubmit={handleSubmit}>
                    <div className='form-head'>
                        < BriefcaseBusiness />
                    <h3>Practical Experience</h3>
                </div>

                <div className='form-controls'>
                    <label htmlFor="role">Position/Role</label>
                        <input type="text" name='position' placeholder="e.g: Scientist" onChange={handleChanges} value={practicalXp.position}/>

                    <label htmlFor="Company's">Company</label>
                        <input type="text" name='company' placeholder="e.g: NASA" onChange={handleChanges} value={practicalXp.company}/>

                    <label htmlFor="Description">Description</label>
                        <input type="text" name='description' placeholder="e.g: Research in quantum computing" onChange={handleChanges} value={practicalXp.description}/>

                    <label htmlFor="Year">Year</label>
                        <input type="date" name='year' placeholder="e.g: 2019-2026" onChange={handleChanges} value={practicalXp.year}/>

                        <button className='edit' type='button' onClick={handleEdit_3}>Edit</button>
                        <button className='submit' type='submit' >Submit</button>
                </div>
            </form>
        </div>
            <section className='Container'>
            <div className='preview-container'>
                <h1>CV Preview</h1>
                <h2>Personal Information</h2>
                <h4>{submittedPerson?.fullName}</h4>
                <h4>{submittedPerson?.email} </h4>
                <h4>{submittedPerson?.phoneNumber}</h4>
                <h4>{submittedPerson?.Address}</h4>
            </div>

            <div className='preview-container'>
                <h2>Education Background</h2>
                <h4>{submittedEducation?.school}</h4>
                <h4>{submittedEducation?.Degree}</h4>
                <h4>{submittedEducation?.Year}</h4>
            </div>

            <div className='preview-container'>
                    <h2>Years of Experience</h2>
                    <h4>{submittedExperience?.position}</h4>
                    <h4>{submittedExperience?.company}</h4>
                    <h4>{submittedExperience?.description}</h4>
                    <h4>{submittedExperience?.year}</h4>
            </div>
            
        </section>
        </div>
    )
}
    
