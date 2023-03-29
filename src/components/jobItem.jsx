import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
function JobItem(props) {
  
  return (
    <div className="card mb-3 mt-3">
      <div className="row no-gutters">
        {/* <div className="col-md-4">
          <img src={props.data.img} className="card-img mr-auto ml-auto h-100" alt="Company Logo" style={{ width: '160px' }} />
        </div> */}
        <div className="col-md-8">
          <div className="card-body">
            <div>
              <h3 className="card-title">{props.data.employer.name}</h3>
              <h5 className="card-title">{props.data.headline}</h5>
              <p className="card-text">{props.data.brief}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <small>
                {"Posted " +
                  props.data.publication_date.toString().substring(0, props.data.publication_date.length - 9)}
              </small>

              {/* <button
                className="btn btn-primary float-right"
                onClick={() => {
                  let todaysDate = new Date();
                  toast.success(
                    props.data.headline +
                      " - " +
                      props.data.employer.name +
                      ", Applied! \n" +
                      props.data.publication_date.toLocaleString(),
                    {
                      position: "top-center",
                      theme: "colored",
                    }
                  );
                }}
              >
                Apply Now
              </button> */}
            </div>
            {/* <span>{"#" + props.data.tags.join(" #")}</span> */}
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary"
        style={{
          // width: "120px",
          // height: "50px",
          marginTop: "auto",
          marginLeft: "auto",
          marginBottom: "20px",
          marginRight: "20px",
        }}
        onClick={() => {
          let todaysDate = new Date();
          toast.success(
            props.data.headline +
              " - " +
              props.data.employer.name +
              ", Applied! \n" +
              props.data.publication_date
                .toLocaleString().substring(0, props.data.publication_date.length - 9),
            {
              position: "top-center",
              theme: "colored",
            }
          );
        }}
      >
        Apply Now
      </button>
    </div>
  );
}

export default JobItem;
