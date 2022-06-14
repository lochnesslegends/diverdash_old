gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDGameTitleObjects1= [];
gdjs.MainMenuCode.GDGameTitleObjects2= [];
gdjs.MainMenuCode.GDGameTitleObjects3= [];
gdjs.MainMenuCode.GDButtonStartObjects1= [];
gdjs.MainMenuCode.GDButtonStartObjects2= [];
gdjs.MainMenuCode.GDButtonStartObjects3= [];
gdjs.MainMenuCode.GDBubblesObjects1= [];
gdjs.MainMenuCode.GDBubblesObjects2= [];
gdjs.MainMenuCode.GDBubblesObjects3= [];
gdjs.MainMenuCode.GDNewObjectObjects1= [];
gdjs.MainMenuCode.GDNewObjectObjects2= [];
gdjs.MainMenuCode.GDNewObjectObjects3= [];
gdjs.MainMenuCode.GDONObjects1= [];
gdjs.MainMenuCode.GDONObjects2= [];
gdjs.MainMenuCode.GDONObjects3= [];
gdjs.MainMenuCode.GDOFFObjects1= [];
gdjs.MainMenuCode.GDOFFObjects2= [];
gdjs.MainMenuCode.GDOFFObjects3= [];
gdjs.MainMenuCode.GDLABELObjects1= [];
gdjs.MainMenuCode.GDLABELObjects2= [];
gdjs.MainMenuCode.GDLABELObjects3= [];
gdjs.MainMenuCode.GDTitleObjects1= [];
gdjs.MainMenuCode.GDTitleObjects2= [];
gdjs.MainMenuCode.GDTitleObjects3= [];
gdjs.MainMenuCode.GDStartObjects1= [];
gdjs.MainMenuCode.GDStartObjects2= [];
gdjs.MainMenuCode.GDStartObjects3= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};


gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects = Hashtable.newFrom({"ButtonStart": gdjs.MainMenuCode.GDButtonStartObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects = Hashtable.newFrom({"ButtonStart": gdjs.MainMenuCode.GDButtonStartObjects1});
gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.MainMenuCode.GDButtonStartObjects1, gdjs.MainMenuCode.GDButtonStartObjects2);

{for(var i = 0, len = gdjs.MainMenuCode.GDButtonStartObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonStartObjects2[i].setAnimationName("StartPressed");
}
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDONObjects2Objects = Hashtable.newFrom({"ON": gdjs.MainMenuCode.GDONObjects2});
gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDOFFObjects1Objects = Hashtable.newFrom({"OFF": gdjs.MainMenuCode.GDOFFObjects1});
gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ON"), gdjs.MainMenuCode.GDONObjects2);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDONObjects2Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("OFF"), gdjs.MainMenuCode.GDOFFObjects2);
/* Reuse gdjs.MainMenuCode.GDONObjects2 */
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 66);
}{for(var i = 0, len = gdjs.MainMenuCode.GDOFFObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDOFFObjects2[i].setAnimationName("OFFNORMAL");
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDONObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDONObjects2[i].setAnimationName("ONSELECTED");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OFF"), gdjs.MainMenuCode.GDOFFObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDOFFObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDOFFObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ON"), gdjs.MainMenuCode.GDONObjects1);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{for(var i = 0, len = gdjs.MainMenuCode.GDONObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDONObjects1[i].setAnimationName("ONNORMAL");
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDOFFObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDOFFObjects1[i].setAnimationName("OFFSELECTED");
}
}}

}


};gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{


{
}

}


};gdjs.MainMenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 66);
}{gdjs.evtTools.sound.playSound(runtimeScene, "menuwater.wav", true, 66, 1);
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonStart"), gdjs.MainMenuCode.GDButtonStartObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDButtonStartObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDButtonStartObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonStartObjects1[i].setAnimationName("StartNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonStart"), gdjs.MainMenuCode.GDButtonStartObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDButtonStartObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDButtonStartObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonStartObjects1[i].setAnimationName("StartHover");
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OFF"), gdjs.MainMenuCode.GDOFFObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainMenuCode.GDOFFObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDOFFObjects1[i].getAnimation() == 1 ) {
        gdjs.MainMenuCode.condition0IsTrue_0.val = true;
        gdjs.MainMenuCode.GDOFFObjects1[k] = gdjs.MainMenuCode.GDOFFObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDOFFObjects1.length = k;}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ON"), gdjs.MainMenuCode.GDONObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDONObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDONObjects1[i].setAnimation(0);
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


{
}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDGameTitleObjects1.length = 0;
gdjs.MainMenuCode.GDGameTitleObjects2.length = 0;
gdjs.MainMenuCode.GDGameTitleObjects3.length = 0;
gdjs.MainMenuCode.GDButtonStartObjects1.length = 0;
gdjs.MainMenuCode.GDButtonStartObjects2.length = 0;
gdjs.MainMenuCode.GDButtonStartObjects3.length = 0;
gdjs.MainMenuCode.GDBubblesObjects1.length = 0;
gdjs.MainMenuCode.GDBubblesObjects2.length = 0;
gdjs.MainMenuCode.GDBubblesObjects3.length = 0;
gdjs.MainMenuCode.GDNewObjectObjects1.length = 0;
gdjs.MainMenuCode.GDNewObjectObjects2.length = 0;
gdjs.MainMenuCode.GDNewObjectObjects3.length = 0;
gdjs.MainMenuCode.GDONObjects1.length = 0;
gdjs.MainMenuCode.GDONObjects2.length = 0;
gdjs.MainMenuCode.GDONObjects3.length = 0;
gdjs.MainMenuCode.GDOFFObjects1.length = 0;
gdjs.MainMenuCode.GDOFFObjects2.length = 0;
gdjs.MainMenuCode.GDOFFObjects3.length = 0;
gdjs.MainMenuCode.GDLABELObjects1.length = 0;
gdjs.MainMenuCode.GDLABELObjects2.length = 0;
gdjs.MainMenuCode.GDLABELObjects3.length = 0;
gdjs.MainMenuCode.GDTitleObjects1.length = 0;
gdjs.MainMenuCode.GDTitleObjects2.length = 0;
gdjs.MainMenuCode.GDTitleObjects3.length = 0;
gdjs.MainMenuCode.GDStartObjects1.length = 0;
gdjs.MainMenuCode.GDStartObjects2.length = 0;
gdjs.MainMenuCode.GDStartObjects3.length = 0;

gdjs.MainMenuCode.eventsList3(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
