main = $('#mainSetting')
USB_VIDEO_MODE_CONTROLS()

// Slide 1
function USB_VIDEO_MODE_CONTROLS() {
    container = $('<div />')

    usbVideoEnabled = formCheckbox('USB Video Enabled', 'usbVideoEnabled')

    videoDeviceSelect = $('<div />')
    videoDeviceSelect.html(formSelectDisable('Video Device Select'))

    usbVideoSource = formSelect('USB Video Source', 'usbVideoSource', ['Post-Colorsize', 'Pre-Agc'])

    output = formLabel('Output', 'output', 'N/A')

    imageOrientationModel = formSelect('Image Orientation Model', 'imageOrientationModel', ['Normal', 'Horizontal Flipped', 'Vertical Flipped', 'Horizontal & Vertical Flipped'])

    colorPalette = formLabel('Color Palette', 'colorPalette', 'WhiteHot')

    usbCmos = formLabel('--- USB & CMOS Telemetry ---')

    usbEnable = formCheckbox('USB Enable', 'usbEnable')

    position = formSelect('Position', 'position', ['Header', 'Footer'])

    packing = formSelect('Packing', 'packing', ['16 bit', 'Color', '8 bit'])

    frameRate = formInput('Frame Rate (F/s)', 'frameRate', '0', 'number', 0, 'disable')

    container.append(usbVideoEnabled,
        videoDeviceSelect,
        usbVideoSource,
        output,
        imageOrientationModel,
        colorPalette,
        usbCmos,
        usbEnable,
        position,
        packing,
        frameRate
    )

    main.html(container)

    usbVideoEnabled.click(function () {
        console.log('aaaaaaa');
        if ($('#usbVideoEnabled').prop('checked') == true) {
            videoDeviceSelect.html(formSelect('Video Device Select', 'videoDeviceSelect', ['USB/WEBCAM', 'OBS']))
        } else {
            videoDeviceSelect.html(formSelectDisable('Video Device Select'))
        }
    })


}

function ANALOG_CMOS_CONTROLS() {
    container = $('<div />')

    let formGroup = $('<div class="radio"></div>')
    let title = $('<div class=title>Video</div><br>')
    let radioAnalogVideo = $(' <input type="radio" id="radioAnalog" name="video" value="analog"> <label for="radioAnalog">Analog Video</label>')
    let radioCmos = $(' <input type="radio" id="radioCmos" name="video" value="cmos"> <label for="radioCmos">CMOS</label>')
    container.append(formGroup)
    formGroup.append(title)
    formGroup.append(radioAnalogVideo)
    formGroup.append(radioCmos)
    //-------//
    analogMode = formSelect('analogmode', 'analogmode', ['NTSC', 'PAL'])
    container.append(analogMode)
    //-------//
    container.append(formLabel('---------------- CONFIGURE ----------------'))
    container.append('<div><span>Video Source</span><span>&nbsp;Output</span></div>')
    TStable = formSelect('', 'tstable', ['Pre-AGC', 'Post-AGC', 'Post-Colorization'])
    container.append(TStable)
    //-------//
    videoFormat = formSelect('Video Format', 'videoFormat', ['Default', 'RGB', 'BGR', 'YCbRr', 'YCrCb', 'CbCrY', 'CrCbY', 'IR16'])
    multiplexMode = formCheckbox('Multiplex Mode', 'multiplexMode')
    pixelClockRate = formSelect('Pixel Clock Rate', 'pixelClockRate', ['Default', '13.5MHz', '27MHz', '48MHz', '60MHz'])
    container.append(videoFormat, multiplexMode, pixelClockRate)
    main.html(container)
}

function AGC_CONTROL() {
    container = $('<div />')

    container.append(formSelect('AGC Presets', 'agcPresets', ['Read Current Setting', 'Equalization', 'Linear']))
    container.append(formSlide('Tail Rejection', 'tailRejection', 0, 0, 49, 1))
    container.append(formSlide('Max Gain', 'maxGain', 0.25, 0, 8, 0.01))
    container.append(formSlide('Damping Factor', 'dampingFactor', 0))
    container.append(formSlide('Adaptive Contrast Enhancement', 'adaptiveContrastEnhancement', 0.5, 0, 2.5, 0.01))
    container.append(formSlide('Plateau Value', 'plateauValue', 1))
    container.append(formSlide('Linear Percent', 'LlnearPercent', 1))
    container.append(formSlide('Detail Headroom', 'detailHeadroom', 0, 0, 127, 1))
    container.append(formSlide('Digital Detail Enhancement', 'digitalDetailEnhancement', 0, 0, 8, 0.01))
    container.append(formSlide('Smoothing Factor', 'smoothingFactor', 0, 0, 8191, 1))

    container.append(formCheckbox('Information-Based EQ Mode', 'tnformationBasedEqMode'))
    container.append(formButton("REGION OF INTEREST FOR AGC", 'regionOfInterestForAgc'))


    main.html(container)
}

function ADVANCED() {
    container = $('<div />')

    container.append(formCheckbox('Flat Field Correction', 'flatFieldCorrection'))
    container.append(formCheckbox('Auto Gain Correction', 'autoGainCorrection'))
    container.append(formCheckbox('Defect Replacement', 'defectReplacement'))
    container.append(formCheckbox('SCNR Column Filter', 'scnrColumnFilter'))
    container.append(formCheckbox('Temporal Filter', 'temporalFilter'))
    container.append(formCheckbox('Silent Shutterless NUC', 'silentShutterlessNuc'))
    container.append(formCheckbox('Supplement FFC', 'supplementFfc'))
    container.append(formCheckbox('LFSR', 'lfsr'))
    container.append(formCheckbox('SRNR', 'srnr'))

    container.append(formLabel('RNS', 'rns', 'N/A'))



    main.html(container)
}

// Slide 2
function FFC_CONTROLS() {
    container = $('<div />')
    container.append(formSelect('FFC Mode', 'ffcmode', ['Manual', 'Auto', 'External', 'External with Auto Table Switch']))
    container.append(formSlide('FFC Period (Seconds)', 'ffcPeriod', 0, 0, 84600, 1))
    container.append(formSlide('FFC Temp Delta (&#176;C)', 'ffcTempDelta', 0.1, 0.1, 10.0, 0.1))
    container.append(formSelect('FFC Intergration Period', 'ffcIntergrationPeriod', ['Two Frames', 'Four Frames', 'Eight Frames', 'Sixteen Frames']))
    main.html(container)
}

function DYNAMIC_RANGE_CONTROL() {
    container = $('<div />')
    container.append(formSelect('Gain Mode', 'gainMode', ['High', 'Low', 'Auto']))
    container.append(formSelectDisable('Temp. Units'))
    container.append(formSlide('High-to-Low Threshold(%)', 'high-to-lowThreshold', 0, 0, 100, 1))
    container.append(formSlide('High-to-Low Population(%)', 'high-to-lowPopulation', 0, 0, 100, 1))
    container.append(formSlide('Hysteresis (%)', 'Hysteresis', 0, 0, 100, 1))
    container.append(formSlide('Low-to-High Population(%)', 'low-to-highPopulation', 0, 0, 100, 1))
    container.append(formInputNumber('Hysteresis Frame', 'hysteresisFrame', 0))
    container.append(formInputNumber('Hysteresis Seconds', 'hysteresisSeconds', 0))
    container.append(formInputText('Current Gain State', 'CurrentGainState', 'Manual'))
    main.html(container)
}

function CONFIGURATION_CONTROLS() {
    container = $('<div />')
    container.append(formLabel("Camera Configuration"))
    container.append(formButton("SAVE POWER-ON DEFAULTS", 'savePower'))
    container.append(formButton("RESTORE FACTORY DEFAULTS", 'restoreFactory'))
    container.append(formButton("CONFIGURATION REPORT", 'configurationReport'))
    container.append(formButton("UPLOAD BOSON CONFIG", 'uploadBosonConfig'))
    container.append(formCheckbox("Ramp Enable", "rampEnable"))
    container.append(formLabel("Warning: Enabling ramp will revert any unsaved settings"))
    container.append(formSelect("Ramp Type", "rampType", ["Zero", "Increment", "Vert. shade"]))
    main.html(container)
}

function IMGAGE_STATS_CONTROLS() {
    container = $('<div />')
    container.append(formSelect("", "prefilters", ["Pre-Filters (Counts)", "Post-Filters (Counts)"]))
    container.append(formButton("REGION OF INTEREST"))
    container.append(formInputText('Min Pixel Value', "minPixelValue", 0))
    container.append(formInputText("", "", 0))
    container.append(formInputText('Max Pixel Value', "maxPixelValue", 0))
    container.append(formInputText("", "", 0))
    container.append(formInputText('Mean Value', "meamValue", 0))
    container.append(formInputText('Frame Mean', "frameMean", 0))
    container.append(formButton("REFRESH", "refresh"))
    main.html(container)
}

function DETECTIVE_PIXEL() {
    container = $('<div />')
    container.append(formInputNumber("Row (-1/0, 512)", "row", "0"))
    container.append(formInputNumber("Col (-1/0, 640)", "col", "0"))
    container.append(formButton("KILL PIXEL", "killPixel"))
    container.append($('<br>'))
    container.append(formButton("SAVE PIXELS", "savePixel"))
    container.append($('<br>'))
    container.append(formButton("RESTORE FACTORY BAD PIXELS", "restorePixel"))
    main.html(container)
}

function SYNC_FRAME_RATE() {
    container = $('<div />')
    container.append(formSelect("", "syncFrame", ["Disabled", "Slave", "Master"]))
    let formGroup = $('<div class="radio"></div>')
    let title = $('<div class=title>Frame Average Mode</div><br>')
    let radioEnabled = $(' <input type="radio" id="frameAverage_enabled" name="frameAverage" value="enable"> <label for="frameAverage_enabled">Enabled</label>')
    let radioDisabled = $(' <input type="radio" id="frameAverage_disabled" name="frameAverage" value="disabled"> <label for="frameAverage_disabled">Disabled</label>')
    let br = $('<br>')
    formGroup.append(br, title, radioEnabled, radioDisabled)
    container.append(formGroup)
    container.append(formSelect("Frame Skip", "frameSkip", ["Skip None", 1, 2, 3, 4, 5, 6, "Skip All"]))
    container.append(formInput('Frame Rate (F/s)', 'frameRate', '0', 'number', 0, 'disable'))
    main.html(container)
}

// Slide 3
function DIAGNOSTICS_CONTROL() {
    container = $('<div />')
    container.append(formButton("REBOOT CAMERA", "rebootCam"))
    container.append($('<br>'))
    container.append(formButton("UPLOAD CAMERA SW( CAMERA WILL REBOOT)", "uploadCam"))
    container.append($('<br>'))
    container.append(formButton("FORMAT JFFS2( CAMERA WILL REBOOT)", "formatJFFS2"))
    main.html(container)
}

function STATUS_PANEL() {
    container = $('<div />')
    container.append("null")


    main.html(container)
}

function OVERTEMP_STATUS() {
    container = $('<div />')
    container.append(formInputText('OverTemp Threshold (C)', "overtempThreshhold", ""))
    container.append(formInputText('Core Temp', "coreTemo", ""))
    container.append(formInputText('Low power State', "lowPowerState", ""))
    container.append(formInputText('Over Temp Status', "overTempStatus", ""))
    container.append(formInputText('Over Temp Counter', "overTemp", ""))
    container.append(formButton("REFRESH", "refresh_overTemp"))
    main.html(container)
}

// Slide 4
function MEDIA_CONFIGURATION() {
    container = $('<div />')
    container.append("null")
    main.html(container)
}

// Slide 5
function CURRENT_LENS() {
    container = $('<div />')
    container.append(formSelect('Current Lens', 'currentLens', ['', 0, 1]))
    main.html(container)
}

function LENS_GAIN_CONTROL() {
    container = $('<div />')

    container.append(formButton('START LENS GAIN CALIBRATION', 'startLensGainCalibration'))
    container.append(formButton('RESTORE LENS GAIN FROM BACKUP', 'restoreLensGainFromBackup'))
    container.append(formLabel('Press Start Button to start the Lens Gain Calibration process'))

    main.html(container)
}

function SFFC_CONTROLS() {
    container = $('<div />')

    container.append(formButton('CALIBRATE SFFC', 'calibrateSffc'))
    container.append(formLabel('Make sure you have a valid Lens Gain before you start the SFFC calibration process'))
    container.append(formLabel("Press 'CALIBRATE SFFC' button to start process"))
    container.append(formButton('MANUAL SFFC CAL', 'manualSffcCal'))

    main.html(container)
}

function NVFFC_CONTROLS() {
    container = $('<div />')

    container.append(formButton('WRITE NVFFC FOR CURRENT LENS', 'writeNvffcForCurrentLens'))
    container.append(formButton('ERASE NVFFC FOR CURRENT LENS', 'eraseNvffcForCurrentLens'))
    container.append(formLabel('Press Start Button to start the Lens Gain Calibration process'))

    main.html(container)
}

// Slide 6
function SYMBOLOGY_ENABLE() {
    container = $('<div />')

    container.append(formCheckbox('Symbology Enabel', 'symbologyEnabel'))

    main.html(container)
}

function SYMBOLOGY_CONTROLS() {
    container = $('<div />')

    container.append(formSelect('Select A Symbology Controls', 'symbologyControls', ['Add Bitmap Symbol', 'Add Text Symbol', 'Modify Symbol', 'Symbol Config']))

    main.html(container)
}

function SYSTEM_SYMBOL_CONTROLS() {
    container = $('<div />')

    container.append(formCheckbox('FFC Imminent Symbol', 'ffcImminentSymbol'))
    container.append(formCheckbox('FFC Desired Symbol', 'ffcDesiredSymbol'))
    container.append(formCheckbox('Table Switch Desired Symbol', 'tableSwitchDesiredSymbol'))
    container.append(formCheckbox('Low Gain Symbol', 'lowGainSymbol'))
    container.append(formCheckbox('OverTemp Symbol', 'overTempSymbol'))
    container.append(formCheckbox('Spotmeter Symbol', 'spotmeterSymbol'))
    container.append(formCheckbox('Isotherm Symbol', 'isothermSymbol'))

    main.html(container)
}

function SPLASH_SCREEN_SETTINGS() {
    container = $('<div />')

    // 1st
    container.append(formLabel('1st SPLASH'))
    container.append(formButton('SEND 1ST SPLASH', 'send1stSplash'))
    container.append(formInput('Duration (ms)', 'duration1st', 0, 'text', 0))
    container.append(formSelect('Type', 'type1st', ['PNG', 'DISABLE']))

    select1st = $('<div style="display: flex" />')
    select1st.append(formInput('Background Color', 'backgroundColor1st', 0, 'text', 0))
    select1st.append(formButton('SELECT', 'select1st'))

    container.append(select1st)

    // 2nd
    container.append(formLabel('2nd SPLASH'))
    container.append(formButton('SEND 2ND SPLASH', 'send2ndSplash'))
    container.append(formInput('Duration (ms)', 'duration2nd', 0, 'text', 0))
    container.append(formSelect('Type', 'type2nd', ['PNG', 'DISABLE']))

    select2nd = $('<div style="display: flex" />')
    select2nd.append(formInput('Background Color', 'backgroundColor2nd', 0, 'text', 0))
    select2nd.append(formButton('SELECT', 'select2nd'))

    container.append(select2nd)

    // Button
    btnBottom = $('<div style="display: flex" />')
    btnBottom.append(formButton('GET CONFIG', 'getConfig'))
    btnBottom.append(formButton('SET CONFIG', 'setConfig'))
    container.append('<hr>', btnBottom)

    main.html(container)
}

// Slide 7
function ADIOMETRY_ENABLE() {
    container = $('<div />')

    container.append(formCheckbox('Symbology Enabel', 'symbologyEnabel'))

    main.html(container)
}

function SPOT_METER_ENABLE() {
    container = $('<div />')

    main.html(container)
}

function TLINENEAR_ENABLE() {
    container = $('<div />')

    main.html(container)
}

function ENVIROMENTAL_FACTORS() {
    container = $('<div />')

    main.html(container)
}

function RADIOMETRY_MODEL() {
    container = $('<div />')

    main.html(container)
}

function RADIOMETRY_STATUS() {
    container = $('<div />')

    main.html(container)
}

// Slide 8
function ISOTHERM_CONTROLS() {
    container = $('<div />')

    container.append(formCheckbox('Symbology Enabel', 'symbologyEnabel'))

    main.html(container)
}

function ISOTHERMS_REGIONS() {
    container = $('<div />')

    main.html(container)
}