import React from 'react';
import view from './prueba_selfie.view';

import { AplicationContext } from '../../context/AplicationContext';
import { basePath } from '../../../next.config';

export default class PhotoLiveSelfiePage extends React.Component {
  static contextType = AplicationContext;
  // Reference to DOM target element where the SDK will load
  target: any = false;
  // Reference to VDDocument SDK
  VDAlive: any = false;

  state = {
    // Log messages
    message: '',
    // SDK status flag
    unmounted: true,
    // PreFace Image
    prefaceImage: false,
    // Face Image
    faceImage: false,
  };

  setMessage = (message: string) => this.setState({ message: message });
  setUnmounted = (unmounted: boolean) => this.setState({ unmounted: unmounted });
  setPrefaceImage = (prefaceImage: any) => this.setState({ prefaceImage: prefaceImage });
  setFaceImage = (faceImage: any) => this.setState({ faceImage: faceImage });

  render() {
    return view(this);
  }

  // Load the main scripts for CV and VDAlive
  start = () => {
    this.setMessage('Loading...');
    this.loadScript(`${basePath}/jsBiometria/VDAlive.js`);
  };

  // Unmount the SDK before leaving the page.
  componentWillUnmount() {
    if (!this.state.unmounted) {
      window.destroyVDAliveWidget();
    }
  }

  componentDidMount() {
    // Get the reference to the DOM 'target' element
    this.target = window.document.getElementById('target');

    // Set the events handlers for the VDAlive events.
    this.target.addEventListener('VDAlive_mounted', this.onVDAliveMounted);
    this.target.addEventListener('VDAlive_mountFailure', this.onVDAliveMountFailure);
    this.target.addEventListener('VDAlive_unmounted', this.onVDAliveUnmounted);
    this.target.addEventListener('VDAlive_prefaceDetection', this.onVDPrefaceDetection);
    this.target.addEventListener('VDAlive_faceDetection', this.onVDAliveFaceDetection);
    this.start();
  }

  //Start the VDAlive SDK
  sdkStart() {
    const gifPath = `${basePath}/jsBiometria/gifs/`;

    this.VDAlive = window.makeVDAliveWidget();
    this.VDAlive({
      targetSelector: '#target',
      infoUserAliveHeader: ' ',
      infoUserAliveBackgroundColor: '#FFFFFF',
      fitYourFace: 'Mire de frente a la cámara sin sonreir',
      smileRequestSmile: 'Ubique su rostro en el círculo y sonría',
      detectionMessageTextColorSelfie: '#FFFFFF',
      detectionMessageBackgroundColorSelfie: 'none',
      infoUserAliveTitle: ['Mire de frente a la cámara sin sonreir y luego sonriendo'],
      infoUserAliveSubTitleColor: '#333333',
      infoUserAliveSubTitle: [
        'La foto se tomará automáticamente después de dar clic en empezar.',
      ],
      infoUserAliveTitleColor: '#00253D',
      pathModels: `${basePath}/jsBiometria/models/`,
      infoAlertShow: true,
      infoModalShow: true,
      reviewImage: false,
      ngas_images_path: gifPath,
      infoUserButtonTextColor: '#f56789',
      infoUserAliveMedia: [`${basePath}/images/selfie2.gif`],
      sdkBackgroundColorInactive: '#A52A2A',
      livephoto: 'YES',
      infoUserAliveColorButton: '#0072C8',
      infoUserAliveButtonText: 'Continuar',
      continueText: 'Continuar',
      repeatText: 'Repetir foto',
      infoReviewImageText: 'Revise que la cara se ve completa y con una expresión natura',
      not_move: 'Mantengase estable',
    });
  }

  // Method to load JS scripts
  loadScript(src: any) {
    let script = document.createElement('script');
    script.setAttribute('src', src);
    script.setAttribute('id', 'tercero');

    script.setAttribute('type', 'application/javascript');
    script.addEventListener('load', () => this.sdkStart());

    document.head.appendChild(script);
  }

  ////////////////////
  // EVENTS HANDLERS
  ////////////////////

  // Start the VDAlive SDK after CV script is initialized
  onRuntimeInitialized = () => {
    if (window.cv) {
      if (window.cv instanceof Promise) {
        window.cv.then((target) => {
          window.cv = target;
          this.sdkStart();
        });
      } else {
        this.sdkStart();
      }
    }
  };

  // VDAlive SDK is mounted
  onVDAliveMounted = () => {
    this.setMessage('VDAlive mounted');
    //Unset the unmounted flag
    this.setUnmounted(false);
  };

  // VDAlive SDK fails to mount
  onVDAliveMountFailure = (data: any) => {
    this.setMessage(data.detail);
  };

  // VDAlive SDK is unmounted
  onVDAliveUnmounted = () => {
    //Set the unmounted flag
    let scripts = document.getElementById('tercero');

    scripts?.parentNode?.removeChild(scripts);
    this.setUnmounted(true);
    this.setMessage('');
  };

  //PreFace event

  onVDPrefaceDetection = (data: any) => {
    if (this.context.selfieEditada === '' || this.context.selfieEditada === 'normal') {
      this.setPrefaceImage(data.detail);
      this.context.setSelfieNormal(data.detail);
    } else {
      this.setFaceImage(data.detail.image_alive);
      this.context.setSelfieSonriendo(data.detail.image_alive);
    }
  };

  // Face image has been taken
  onVDAliveFaceDetection = (data: any) => {
    // Assign the images to their variables

    this.setPrefaceImage(data.detail.image);
    this.context.setSelfieSonriendo(data.detail.image);

    this.context.setSelfieNormal(data.detail.image_alive);
  };

  // CV script fails to load
  onCVLoadError = (error: any) => {
    this.setMessage('Failed to load/initialize cv.js');
  };
}
