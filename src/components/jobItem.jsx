import 'bootstrap/dist/css/bootstrap.min.css';

function JobItem() {
  return (
    
        <div className="card mb-3 mt-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="src\Apple-logo.png" className="card-img rounded-circle" alt="Company Logo" style={{ height: '120px', width: '120px' }} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div>
                  <h5 className="card-title">Apple</h5>
                  <p className="card-text">Backend Developer.</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <small>Posted 3 days ago</small>
                
                  <button className="btn btn-primary">Apply Now</button>
                </div>
                <span>#developer #apple</span>
              </div>
            </div>
          </div>
        </div>
        
  );
}

export default JobItem;
