class Comp extends React.Component{

    render(){
    return(<div class="button">
    <div class="icon">
      <i class={"fa fa-"+this.props.icon}></i>
    </div>
    <span>{this.props.name}</span>
    </div>)
    }


}



{/* <div class="button">
<div class="icon">
  <i class="fa fa-instagram"></i>
</div>
<span>Instagram</span>
</div> */}
