
const AddTask = () => {
    return (
        <form className='add-form'>
             <div className='form-control'>
                 <label>Task</label>
                 <input type='text' placeholder='Enter Task Name'></input>
             </div>
             <div className='form-control'>
                 <label>Date</label>
                 <input type='text' placeholder='Enter Task Name'></input>
             </div>
             <div className='form-control'>
                 <div>
                 <label>Type</label>

                 </div>
                <select className='form-control-select'>
                    <option value="Essay">Essay</option>
                    <option value="Presentation">Presentation</option>
                    <option value="Exam">Exam</option>
                    <option value="Study Session">Study Session</option>
                </select>
             </div>
            <input type='submit' value = 'Save Task'></input>
        </form>
    )
}

export default AddTask
