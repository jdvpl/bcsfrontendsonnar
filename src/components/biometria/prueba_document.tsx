/*eslint-disable */
import React from 'react';
import { basePath } from '../../../next.config';
import { AplicationContext } from '../../context/AplicationContext';
import view from './prueba_document.view';

export default class DocumentPage extends React.Component {
  static contextType = AplicationContext;
  // Reference to DOM target element where the SDK will load
  target: any = false;
  // Reference to VDDocument SDK
  vdDocument: any = false;
  
  

  state = {
    // Log messages
    message: '',
    // SDK status flag
    unmounted: true,
    // Obverse Image
    obverseImage: false,
    // Reverse Image
    reverseImage: false,

    //Contador de Scripts
    count: 0,
  };

  setMessage = (message: string) => this.setState({ message: message });
  setUnmounted = (unmounted: boolean) => this.setState({ unmounted: unmounted });
  setObverseImage = (obverseImage: any) => this.setState({ obverseImage: obverseImage });
  setReverseImage = (reverseImage: any) => this.setState({ reverseImage: reverseImage });

  render() {
    return view(this);
  }

  // Load the main scripts for CV and VDDocument
  start = () => {
    this.setMessage('Loading...');
    try {
      this.loadScript(`${basePath}/jsBiometria/VDDocument.js`, () => {
        this.loadScript(
          `${basePath}/jsBiometria/opencv/cv.js`,
          this.onRuntimeInitialized,
          this.onCVLoadError
        );
      });
    } catch (error) {}
  };

  // Unmount the SDK before leaving the page.
  componentWillUnmount() {
    if (!this.state.unmounted) {
      window.destroyVDDocumentWidget();
    }
  }

  componentDidMount() {
    try {
      // Get the reference to the DOM 'target' element
      this.target = window.document.getElementById('target');

      // Set the events handlers for the VDDocument events.
      this.target.addEventListener('VDDocument_mounted', this.onVDDocumentMounted);
      this.target.addEventListener(
        'VDDocument_mountFailure',
        this.onVDDocumentMountFailure
      );
      this.target.addEventListener('VDDocument_unmounted', this.onVDDocumentUnmounted);
      this.target.addEventListener(
        'VDDocument_obverseDetection',
        this.onVDDocumentObverseDetection
      );
      this.target.addEventListener(
        'VDDocument_reverseDetection',
        this.onVDDocumentReverseDetection
      );
      this.target.addEventListener(
        'VDDocument_continueClicked',
        this.onVDDOcumentClickNext
      );
      this.target.addEventListener(
        'VDDocument_cameraStarted',
        this.onVDDOcumentCameraStart
      );
      this.target.addEventListener('VDDocument_detectionTimeout', this.onVDtimeOut);
      this.target.addEventListener(
        'VDDocument_reviewImage',
        this.onVDDocumentReviewImage
      );
      this.target.addEventListener(
        'VDDocument_restartProcess',
        this.onVDDocument_restartProcess
      );
      this.target.addEventListener(
        'VDDocument_repeatClicked',
        this.onVDDocument_repeatClicked
      );
      this.target.addEventListener(
        'VDDocument_obverseDetection_type',
        this.onVDDocument_obverseDetection_type
      );
      this.target.addEventListener(
        'VDDocument_orientationChanged',
        this.onVDDOcumentOrientation
      );
      this.start();
    } catch (error) {}
  }

  //Start the VDDocument SDK, setting the DOM target element and the path for the 'docLibHelper'
  sdkStart() {
    try {
      if (window) {
        this.vdDocument = window.makeVDDocumentWidget();
        if (this.context.fotoEditada == 'trasero') {
          this.vdDocument({
            targetSelector: '#target',
            infoUserSliderButtonText: 'Continuar',
            documents: ['CO_ID'],
            docLibHelperPath: '/js/docLibHelper',
            infoUserDocumentBackgroundColorTop: '#FFFFFF',
            borderColorCenteringAidDefault: '#FFFFFF',
            infoReviewImageText: 'Compruebe que la foto es legible y éste bien enfocada',
            firstArrow: '#FFFFFF',
            secondArrow: '#FFFFFF',
            thirdArrow: '#FFFFFF',
            fourthArrow: '#FFFFFF',
            fifthArrow: 'FFFFFFF',
            borderColorCenteringAidDetecting: '#3B9DD6',
            infoUserDocumentMedia: '',
            infoUserDocumentTitle: `Ubique el reverso de su cédula dentro del recuadro`,
            displayErrors: true,
            reviewImage: false,
            docCaptureVerticalPortraitMode: false,
            confirmationDialogBackgroundColor: '#FFFFFF',
            continueText: 'Continuar',
            repeatText: 'Repetir foto',
            obverseNotFoundText: 'Ubique el reverso de su cédula dentro del recuadro',
            reverseNotFoundText: 'Ubique el reverso de su cédula dentro del recuadro',
          });
        } else {
          this.vdDocument({
            targetSelector: '#target',
            documents: ['CO_ID'],
            infoUserSliderButtonText: 'Continuar',
            docLibHelperPath: '/js/docLibHelper',
            borderColorCenteringAidDetecting: '#3B9DD6',
            borderColorCenteringAidDefault: '#FFFFFF',
            infoReviewImageText: 'Compruebe que la foto es legible y éste bien enfocada',
            firstArrow: '#FFFFFF',
            secondArrow: '#FFFFFF',
            thirdArrow: '#FFFFFF',
            fourthArrow: '#FFFFFF',
            fifthArrow: 'FFFFFFF',
            reviewImage: false,
            infoUserDocumentBackgroundColorTop: '#FFFFFF',
            infoUserDocumentMedia: '',
            infoUserDocumentTitle: `Ubique el frente de su cédula dentro del recuadro`,
            displayErrors: true,
            docCaptureVerticalPortraitMode: false,
            confirmationDialogBackgroundColor: '#FFFFFF',
            continueText: 'Continuar',
            repeatText: 'Repetir foto',
            obverseNotFoundText: 'Ubique el frente de su cédula dentro del recuadro',
            reverseNotFoundText: 'Ubique el reverso de su cédula dentro del recuadro',
          });
        }
      } else {
        return false;
      }
    } catch (error) {}
  }

  // Method to load JS scripts
  loadScript(src: any, callback: any = null, onError: any = null) {
    let script = document.createElement('script');
    script.setAttribute('src', src);
    script.setAttribute('id', 'terceros');
    script.setAttribute('async', '');
    script.setAttribute('type', 'application/javascript');

    if (callback != null) {
      // Calback when the script is loaded
      script.addEventListener('load', () => callback());
    }
    if (onError != null) {
      // Calback when the script fails to load
      script.addEventListener('error', () => onError());
    }

    document.head.appendChild(script);
  }

  ////////////////////
  // EVENTS HANDLERS
  ////////////////////

  // Start the VDDocument SDK after CV script is initialized
  onRuntimeInitialized = () => {
    try {
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
    } catch (error) {}
  };

  // VDDocument SDK is mounted
  onVDDocumentMounted = () => {
    try {
      this.setMessage('VDDocument mounted');
      //Unset the unmounted flag
      this.setUnmounted(false);

      this.insertarTexto();
    } catch (error) {}
  };

  // VDDocument SDK fails to mount
  onVDDocumentMountFailure = (data: { detail: string }) => {
    this.setMessage(data.detail);
  };

  // VDDocument SDK is unmounted
  onVDDocumentUnmounted = () => {
    //Set the unmounted flag
    this.setUnmounted(true);
    this.setMessage('');
    let scripts = document.getElementById('terceros');

    scripts?.parentNode?.removeChild(scripts);
  };

  // Observe image has been taken
  onVDDocumentObverseDetection = (data: { detail: any }) => {
    if (this.context.fotoEditada === '' || this.context.fotoEditada === 'delantero') {
      // Assign the image to its variable
      this.context.setFotoDelantera(data.detail);
      this.setObverseImage(data.detail);
    } else {
      this.context.setFotoTrasera(data.detail);
      this.setReverseImage(data.detail);
      this.onVDDocumentUnmounted();
    }
  };

  // Reverse image has been taken
  onVDDocumentReverseDetection = (data: { detail: any }) => {
    if (this.context.fotoEditada === '' || this.context.fotoEditada === 'trasero') {
      // Assign the image to its variable
      this.context.setFotoTrasera(data.detail);
      this.setReverseImage(data.detail);
    } else {
      this.context.setFotoDelantera(data.detail);
      this.setObverseImage(data.detail);
      this.onVDDocumentUnmounted();
    }
  };
  onVDDOcumentClickNext = () => {
    if (
      this.context.fotosCedula['delantera'] !== '' &&
      this.context.fotosCedula['trasera'] !== ''
    ) {
      this.context.fotoEditada = '';
      this.onVDDocumentUnmounted();
    }
  };
  onVDDOcumentCameraStart = (data: any) => {
    setInterval(() => {
      let divCount = document.getElementsByClassName('Countdown__Styled-yl3yc2-0')[0];
      if (divCount) {
        let element = divCount.getElementsByClassName('vd-digit')[2];
        if (element) {
          let bounti = element.getBoundingClientRect();

          if (bounti.x !== 0) {
            element.remove();
          }
        }
      }
    }, 100);
  };
  onVDtimeOut = () => {};
  onVDDocumentReviewImage = (data: any) => {};
  onVDDocument_restartProcess = (data: any) => {};
  onVDDocument_repeatClicked = (data: any) => {};
  onVDDocument_obverseDetection_type = (data: any) => {};
  onVDDOcumentOrientation = () => {};
  // CV script fails to load
  onCVLoadError = () => {
    this.setMessage('Failed to load/initialize cv.js');
  };

  insertarTexto() {
    let intervalo: NodeJS.Timeout;
    intervalo = setInterval(() => {
      let div: any = document.getElementsByClassName('portal-body');
      if (div.length === 0) {
        if (div.length > 0) {
          let button = div[0].getElementsByTagName('button')[0];
          let p = div[0].getElementsByTagName('p')[1];
          let firstP = div[0].getElementsByTagName('p')[0];

          setTimeout(() => {
            if (this.context.fotoEditada == 'trasero') {
              firstP.innerHTML = `Ubique el reverso de su cédula dentro del recuadro`;
              p.innerHTML = `<span>La foto se tomará automáticamente después de dar clic en empezar. </span>`;
            }
            p.innerHTML = `<span>Ubique su cédula en un fondo oscuro y la foto se tomará automaticamente</span>`;
            button.onclick = function (e: any) {
              document.addEventListener('click', () => {});
              return false; //handled click
            };
          }, 1000);
          clearInterval(intervalo);
        }
      } else {
        let p = div[0].getElementsByTagName('p')[1];
        let firstP = div[0].getElementsByTagName('p')[0];
        let button = div[0].getElementsByTagName('button')[0];

        setTimeout(() => {
          if (this.context.fotoEditada == 'trasero') {
            firstP.innerHTML = `Ubique el reverso de su cédula dentro del recuadro`;
            p.innerHTML = `<span>La foto se tomará automáticamente después de dar clic en empezar. </span>`;
          } else {
            p.innerHTML = `<span> En un <strong class='font-bold'> fondo oscuro</strong> y la foto se tomará automaticamente</span>`;
          }
          button.onclick = function (e: any) {
            document.addEventListener('click', () => {});
            return false;
          };
        }, 1000);

        clearInterval(intervalo);

        return false;
      }
    }, 100);
  }
}
/*eslint-enable */
