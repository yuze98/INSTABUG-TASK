package com.instabug_task

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import okhttp3.*
import java.io.IOException

class MoviesApi(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "MoviesApi"
    }

    @ReactMethod
    fun getMoviesListNative(url: String, promise: Promise) {
        val client = OkHttpClient()
        val request = Request.Builder()
                .url(url)
                .build()

        client.newCall(request).enqueue(object : Callback {
            override fun onResponse(call: Call, response: Response) {
                val responseData = response.body?.string()
                if (response.isSuccessful) {
                    promise.resolve(responseData)
                } else {
                    promise.reject("HTTP_ERROR", "HTTP error code: ${response.code}")
                }
            }

            override fun onFailure(call: Call, e: IOException) {
                promise.reject("FETCH_FAILED", e)
            }
        })
    }
}
