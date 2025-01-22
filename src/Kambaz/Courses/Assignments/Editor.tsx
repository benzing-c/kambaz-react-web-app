export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" cols={60} rows={10}>
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <p/>
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
              <p/>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="ASSIGNMENTS" selected>ASSIGNMENTS</option>
                <option value="ASSIGNMENTS">QUIZZES</option>
                <option value="ASSIGNMENTS">EXAMS</option>
              </select>
              <p/>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="ASSIGNMENTS" selected>Percentage</option>
                <option value="ASSIGNMENTS">Points</option>
                <option value="ASSIGNMENTS">Letter</option>
              </select>
              <p/>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="ASSIGNMENTS" selected>Online</option>
                <option value="ASSIGNMENTS">In Person</option>
              </select>
              
              <p>
                <label>Online Entry Options:</label><br/>

                <input type="checkbox" name="check-submission-type" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br/>

                <input type="checkbox" name="check-submission-type" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label><br/>

                <input type="checkbox" name="check-submission-type" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recording</label><br/>

                <input type="checkbox" name="check-submission-type" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotations</label><br/>

                <input type="checkbox" name="check-submission-type" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Uploads</label><br/>
              </p>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Assign</label>
            </td>
            <td>
              <label htmlFor="wd-assign-to">Assign to:<br/></label>
              <input id="wd-assign-to" value="Everyone"/><p/>

              <label htmlFor="wd-due-date"> Due<br/> </label>
                <input type="date"
                value="2024-05-13"
                id="wd-due-date"/><p/>
              <tr>
                <td>
                  <label htmlFor="wd-available-from"> Available from<br/> </label>
                  <input type="date"
                  value="2024-05-06"
                  id="wd-available-from"/>
                </td>
                <td>
                  <label htmlFor="wd-available-until"> Until<br/> </label>
                  <input type="date"
                  value="2024-05-20"
                  id="wd-available-until"/>
                </td>
              </tr>
            </td>
          </tr>
          <tr>
            <td colSpan={2} align="right">
            <hr />
            <button type="button"
              onClick={() => alert("Placeholder")}
              id="wd-cancel">
              Cancel
            </button>

            <button type="button"
              onClick={() => alert("Placeholder")}
              id="wd-save">
              Save
            </button></td>
          </tr>
        </table>
        
      </div>
  );}
  /*wd-points		wd-group		wd-display-grade-as	wd-submission-type	wd-text-entry
  wd-website-url		wd-media-recordings	wd-student-annotation	wd-file-upload
  wd-assign-to		wd-due-date		wd-available-from	wd-available-until	wd-name 6-20 */ 