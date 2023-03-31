import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function JobItem(props) {

  const navigate = useNavigate(); 
  
  return (
    <li className="card mb-3 mt-3" tabIndex="0">
      <div className="row no-gutters">
        <div className="col-md-8">
          <div className="card-body">
            <div>
              <h1 className="card-title" style={{ fontSize: '2rem' }}>{props.data.employer.name}</h1>
              <h2 className="card-title" style={{ fontSize: '1.5rem' }}>{props.data.headline}</h2>
              <p className="card-text">{props.data.brief}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <small>
                {"Posted " +
                  props.data.publication_date.toString().substring(0, props.data.publication_date.length - 9)}
              </small>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary"
        aria-label="Apply now"
        style={{
          marginTop: "auto",
          marginLeft: "auto",
          marginBottom: "20px",
          marginRight: "20px",
        }}
        onClick={() => navigate("/apply-page-one")}
        // onClick={() => {

          // let todaysDate = new Date();
          // toast.success(
          //   props.data.headline +
          //     " - " +
          //     props.data.employer.name +
          //     ", Applied! \n" +
          //     props.data.publication_date
          //       .toLocaleString().substring(0, props.data.publication_date.length - 9),
          //   {
          //     position: "top-center",
          //     theme: "colored",
          //   }
          // );
        // }}
      >
        Apply Now
      </button>
    </li>
  );
}

export default JobItem;
