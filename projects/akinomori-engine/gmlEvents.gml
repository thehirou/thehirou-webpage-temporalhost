//Create Event
get = http_get("https://thehirou.github.io/AkinomoriEngine/index.html");
resultHttp=sprLoadingInternet

global.urlSet="disabled"
global.seemask=false //Debug mode, not important

gotResult=false
drawImage=false
image=0
imageVar =	sprite_add(resultHttp,0,0,0,0,0)
timer=0
onceIsCool=true
//#############################################################################

//Step Event
global.urlSet=resultHttp

if global.urlSet!=0 and instance_exists(oNpcDevApfel)
{
	instance_destroy(self)	
}

//Not really important

timer++
if timer>5*60
{
if !instance_exists(oNpcDevApfel) and global.urlSet!=0
	{
		instance_create_depth(0,0,depth,oNpcDevApfel)	
	}
}

if global.seemask=true
{
print(global.urlSet)	
}
//#############################################################################

//Draw Event
if object_get_sprite(object_index){draw_self();}
//#############################################################################

//Async Http Event
	if ds_map_find_value(async_load, "id") == get
    {
    if ds_map_find_value(async_load, "status") == 0
        {
        r_str = ds_map_find_value(async_load, "result");
		resultHttp=r_str
		gotResult=true
        }
    else
        {
        r_str = "null";
        }
    }
//#############################################################################
