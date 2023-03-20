import 'bootstrap/dist/css/bootstrap.min.css';

function JobItem(props) {
  return (
    
        <div className="card mb-3 mt-3">
            {/* {console.log(props.data.time) } */}
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={props.data.img} className="card-img m-auto h-100" alt="Company Logo" style={{ height: '100px', width: '150px' }} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div>
                  <h5 className="card-title">{props.data.company}</h5>
                  <p className="card-text">{props.data.description}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <small>{"Posted " + props.data.time}</small>
                
                  <button className="btn btn-primary">Apply Now</button>
                </div>
                <span>{"#" + props.data.tags.join(' #')}</span>
              </div>
            </div>
          </div>
        </div>
        
  );
}

export default JobItem;
