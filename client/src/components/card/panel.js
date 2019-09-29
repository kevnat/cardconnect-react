import React, { Component } from "react";

// import API from '../../utils/API';

export class Panel extends Component {
  render() {
      const {children} = this.props;
      return <div className="col-md-6">
       {children}
     </div>
    }
}
  
    //  return (
    //     <div className="col-md-6">
    //       <Card onClick={this.test}>
    //           <h5>TEST</h5>
    //       </Card>
    //     </div>
    //   );
    // }

export default Panel;