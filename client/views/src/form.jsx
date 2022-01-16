const Form = () => {
  return (
    <form>
      <div className="form-row">
        <div className=" mb-3 ">
          <label htmlFor="validationServer01">UserName</label>
          <input
            type="text"
            className="form-control is-valid"
            id="validationServer01"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className=" mb-3">
          <label htmlFor="validationServer02">Email</label>
          <input
            type="email"
            className="form-control is-valid"
            id="validationServer02"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
      </div>
      <div className="form-row">
        <div className=" mb-3">
          <label htmlFor="validationServer03">City</label>
          <input
            type="text"
            className="form-control is-invalid"
            id="validationServer03"
            aria-describedby="validationServer03Feedback"
            required
          />
          <div id="validationServer03Feedback" className="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>
        <div className=" mb-3">
          <label htmlFor="validationServer04">State</label>
          <select
            className="custom-select is-invalid"
            id="validationServer04"
            aria-describedby="validationServer04Feedback"
            required
          >
            <option selected disabled value="">
              Choose...
            </option>
            <option>...</option>
          </select>
          <div id="validationServer04Feedback" className="invalid-feedback">
            Please select a valid state.
          </div>
        </div>
        <div className=" mb-3">
          <label htmlFor="validationServer05">Zip</label>
          <input
            type="text"
            className="form-control is-invalid"
            id="validationServer05"
            aria-describedby="validationServer05Feedback"
            required
          />
          <div id="validationServer05Feedback" className="invalid-feedback">
            Please provide a valid zip.
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="form-check">
          <input
            className="form-check-input is-invalid"
            type="checkbox"
            id="invalidCheck3"
            aria-describedby="invalidCheck3Feedback"
            required
          />
          <label className="form-check-label" htmlFor="invalidCheck3">
            Agree to terms and conditions
          </label>
          <div id="invalidCheck3Feedback" className="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit form
      </button>
    </form>
  );
};

export default Form;
