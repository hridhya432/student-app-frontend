import React from 'react'
import Nav from './Nav'

const AddStudent = () => {
  return (
    <div>
<Nav/>

<div class="container">
        <div class="row">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div class="row g-3">
    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

 <label for="form" class="form-label">Name</label>
 <input type="text" className="form-control" />



    </div>
    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label for="form" class="form-label">Roll No</label>
        <input type="text" className="form-control" />
        
        
          </div>
    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
<label for="form" class="form-label">Admission No</label>
<input type="text" className="form-control" />


   </div>
    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label for="form" class="form-label">College</label>
        <input type="text" className="form-control" />

    </div>

    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <button class="btn btn-success">Submit</button>
    </div>
</div>

            </div>
        </div>
    </div>
    </div>
  )
}

export default AddStudent
