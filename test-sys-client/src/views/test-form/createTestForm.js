import { Btn, Dropdown, Input, Line } from 'UIKit';
import { testTypes, languages } from "models/presentationAxis";
import './createTestsForm.css';
import { useSelector } from 'react-redux';

const CreateTestForm = (props) => {
    const topic = useSelector(state => state.topic.topic);

    return (
        <div className='AddTForm'>
                <form>
                    <div className='form-container' >
                        <h1>New Test</h1> <Line justify="around"> <h2>topic : {topic.name}</h2></Line>
                        <label>Type of Test:</label>
                        <Dropdown list={testTypes} selected={props.testType} onChange={(value) => props.onTestTypeChange(value)} />
                        <label>Language: </label>
                        <Dropdown list={languages} selected={props.lang} onChange={(value) => props.onLangChange(value)} />
                        <label>Manager Email:: </label>
                        <Input placeholder="Manager Email:" type="email" {...props.Manager_email} />
                        <label>Test Name:</label>
                        <Input placeholder="Test Name:" maxLength="200" {...props.Test_name} />
                        <label>Passing Grade:</label>
                        <Input placeholder="Passing Grade:" type="number" min="1" max="100" {...props.Passing_grade} />
                        <label>Header:</label>
                        <Input placeholder="Header:" {...props.Test_header} />
                        <h3>Message for student </h3>
                        <label>On Success:</label>
                        <Input placeholder="Message to Show Student on Success:"  {...props.Text_msgOnSuccess} />
                        <label>On  Failure:</label>
                        <Input placeholder="Message to Show Student on Failure:"  {...props.Text_msgOnFailure} />
                        <label> Show Student Where He Was Wrong?</label>
                        <Line>
                            <input style={{ width: '10px' }} type="checkbox" checked={props.toShowMistakes} onChange={() => { props.onToShowChange(props.toShowMistakes) }} />
                        </Line>

                        <h3 >Manager Email On Success:</h3>
                        <label>Email subject</label>
                        <Input type="text" placeholder="Subject" {...props.Email_succSub} />
                        <label>Email body:</label>
                        <Input placeholder='Body' {...props.Email_succBody} />

                        <h3 >Manager Email On failiure:</h3>
                        <label>Email subject</label>
                        <Input type="text" placeholder="Subject" {...props.Email_failSub} />
                        <label>Email body:</label>
                        <Input placeholder='Body' {...props.Email_failBody} />

                        <Btn i="chevron-right" onClick={() => { props.next(); }}>Next</Btn>
                    </div>
                </form>
        </div >
    )
}

export default CreateTestForm;