local TARGET_NAME = "example_link_speech2"
local LIB_DIR = "$(buildir)/".. TARGET_NAME .. "/"
local LIB_NAME = "lib" .. TARGET_NAME .. ".a "
includes(SDK_TOP .. "/thirdparty/audio_decoder")
target(TARGET_NAME)
    set_kind("static")
    set_targetdir(LIB_DIR)
    --使用第三方的linksdk
    includes(SDK_TOP .. "/thirdparty/linksdk")
    add_deps("linksdk")
    add_deps("audio_decoder")
    --加入代码和头文件
    add_includedirs("./inc", SDK_TOP .. "/thirdparty/linksdk/core",{public = true})
    add_files("./src/link_speech_basic_demo.c",{public = true})

    --路径可以随便写,可以加任意路径的代码,下面代码等效上方代码
    -- add_includedirs(SDK_TOP .. "project/" .. TARGET_NAME .. "/inc",{public = true})
    -- add_files(SDK_TOP .. "project/" .. TARGET_NAME .. "/src/*.c",{public = true})

    --可以继续增加add_includedirs和add_files
    --自动链接c 

    LIB_USER = LIB_USER .. SDK_TOP .. LIB_DIR .. LIB_NAME .. " "
    --甚至可以加入自己的库
target_end()