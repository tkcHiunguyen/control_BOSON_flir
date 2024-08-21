import Khang_flir.flir_boson_control.ClientFiles_Python.Serializer_Struct as uart_struct
import Khang_flir.flir_boson_control.ClientFiles_Python.Client_API as flir
from Khang_flir.flir_boson_control.ClientFiles_Python.EnumTypes import FLR_COLORLUT_ID_E, FLR_ENABLE_E
import Khang_flir.flir_boson_control.ClientFiles_Python.Client_Khang as khang


class FLR_BOSON():
    def __init__(self):
        self._khang = khang

    # def __init__(self, port="", baudrate=0):
    #     self._flir = flir
    #     self._flir.Initialize(manualport=port, manualbaud=baudrate)
    #     self._zoom_scaler_t = uart_struct.FLR_SCALER_ZOOM_PARAMS_T()
    #     self._khang = khang

    # def setZoomLevel(self, zoom_index):
    #     self._zoom_scaler_t.zoom = zoom_index
    #     self._zoom_scaler_t.xCenter = 0
    #     self._zoom_scaler_t.yCenter = 0
    #     self._flir.scalerSetZoom(self._zoom_scaler_t)

    # def setLutColor(self, idexcolor: FLR_COLORLUT_ID_E):
    #     self._flir.colorLutSetId(idexcolor)

    # def gao(self):
    #     self._flir.gaoSetGainState(FLR_ENABLE_E.FLR_ENABLE)

    # def enable(self):
    #     self._flir.dvoSetAnalogVideoState(FLR_ENABLE_E.FLR_ENABLE)

    # def disable(self):
    #     self._flir.dvoSetAnalogVideoState(FLR_ENABLE_E.FLR_DISABLE)

    def khangAPI(self, text):
        self._khang.testAPI(text)
        print(self._khang.testAPI(text))


if __name__ == "__main__":
    myflir = FLR_BOSON()

    # # turn on flir
    # myflir.enable()
    # #myflir.disable()

    # # set zoom level (0 - 48)
    # myflir.setZoomLevel(10)

    # # set lut color
    # #myflir.setLutColor(FLR_COLORLUT_ID_E.FLR_COLORLUT_IRONBOW)
    # myflir.setLutColor(FLR_COLORLUT_ID_E.FLR_COLORLUT_WHITEHOT)
