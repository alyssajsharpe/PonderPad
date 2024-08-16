import { Form } from "react-bootstrap";

export default function JournalEntry(){
    return (
        <>
        <div>Journal Entry</div>
            <form>
                <div className="form-group">
                    <div className="col">
                    <label htmlFor="title">Journal Title</label>
                    <input type="text" id="title"></input>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date"></input>
                    </div>
                </div>

                <button type='submit' className="btn btn-primary"></button>
            </form>
        </>
    );
}