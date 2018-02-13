import React,{Component} from 'react';
import classes from './ImagePreview.css';

import InputField from '../../components/UI/InputField/InputField';
import Preview from '../../components/UI/ImagePreview/Preview/ImagePreview';
import DropBox from '../../components/UI/ImagePreview/DropBox/DropBox';

class ImagePreview extends Component{
  constructor(props){
    super(props);
    this.state={
      encodedPicture:"",
      isCanDrop:false
    }

  }

  onDropPictureHandler = e =>{
    e.stopPropagation();
    e.preventDefault();

    var dt = e.dataTransfer;
    var file = dt.files[0];
    convertImgToBase64(this, file);
    this.setState({isCanDrop: false});
  }
  onInputFieldClickHandler=(e)=>{
    let file=e.target.files[0];
    convertImgToBase64(this, file);
  }

  onDragHandler=(e)=> {
    e.stopPropagation();
    e.preventDefault();
    this.setState({isCanDrop: true});
  }

  onDragLeaveHandler=(e)=>{
    this.setState({isCanDrop: false});
  }

  render(){
    let $inputField=(<InputField icon="add_a_photo" type="file" id="UserPicture" title="" onChange={this.onInputFieldClickHandler}/>)
    let $preview=(<Preview img={this.state.encodedPicture}/>)
    if(this.state.encodedPicture.length===0){
      //$inputField=null;
      $preview=null;
    }

    return (
      <div className={classes.ImagePreview}>
          <DropBox drop= {this.onDropPictureHandler}
             ondrag={this.onDragHandler}
             onDragLeave={this.onDragLeaveHandler}
              >
            {$inputField}
            {$preview}
          </DropBox>



      </div>
    );
  }
}
const convertImgToBase64 = ( obj, file ) => {
  const reader  = new FileReader();

    reader.addEventListener("load", () => {
      obj.setState( { encodedPicture: reader.result } );
    }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}

export default ImagePreview;





