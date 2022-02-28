import { Btn, Dropdown, Input } from 'UIKit';
import { testTypes, languages } from "models/presentationAxis";
import './createQuestionForm.css';
import { useSelector } from 'react-redux';

const CreateTestForm = (props) => {
    const topic = useSelector(state => state.topic.topic);

    return (
        <div className='AddTForm'>
            <h1>New Test</h1>
            <form>
                <div className='form-container' >
                    <label>Topic: {topic.name}</label>
                    <label>
                        Type of Test:
                        <Dropdown list={testTypes} selected={props.testType} onChange={(value) => props.onTestTypeChange(value)} />
                    </label>
                    <label>
                        Language:
                        <Dropdown list={languages} selected={props.lang} onChange={(value) => props.onLangChange(value)} />
                    </label>
                    <Input placeholder="Manager Email:" type="email" {...props.Manager_email} />
                    <Input placeholder="Test Name:" maxLength="200" {...props.Test_name} />
                    <Input placeholder="Passing Grade:" type="number" min="1" max="100" {...props.Passing_grade} />
                    <Input placeholder="Header:" {...props.Test_header} />
                    <Input placeholder="Message to Show Student on Success:"  {...props.Text_msgOnSuccess} />
                    <Input placeholder="Message to Show Student on Failure:"  {...props.Text_msgOnFailure} />

                    <label>
                        Show Student Where He Was Wrong?
                        <input type="checkbox" checked={props.toShowMistakes} onChange={() => { props.onToShowChange(props.toShowMistakes) }} />
                    </label>

                    <label>
                        Manager Email On Succes:
                        <Input type="text" placeholder="Subject" {...props.Email_succSub} />
                    </label>
                    <Input placeholder='Body' {...props.Email_succBody} />

                    <label>
                        Manager Email On Failure:
                        <Input type="text" placeholder="Subject" {...props.Email_failSub} />
                    </label>
                    <Input placeholder='Body' {...props.Email_failBody} />

                    <Btn i="chevron-right" onClick={() => { props.next(); }}>Next</Btn>
                </div>
            </form>
        </div >
    )
}

export default CreateTestForm;