import Foundation
import React

@objc(MoviesApi)
class MoviesApi: NSObject {
    
    @objc func getMoviesListNative(_ url: String, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        guard let requestUrl = URL(string: url) else {
            reject("INVALID_URL", "The provided URL is invalid.", nil)
            return
        }
        
        let task = URLSession.shared.dataTask(with: requestUrl) { (data, response, error) in
            if let error = error {
                reject("FETCH_FAILED", "Failed to fetch data", error)
                return
            }
            
            guard let httpResponse = response as? HTTPURLResponse, let data = data else {
                reject("INVALID_RESPONSE", "Invalid response from server", nil)
                return
            }
            
            if httpResponse.statusCode >= 200 && httpResponse.statusCode < 300 {
                let responseString = String(data: data, encoding: .utf8)
                resolve(responseString)
            } else {
                reject("HTTP_ERROR", "HTTP error code: \(httpResponse.statusCode)", nil)
            }
        }
        
        task.resume()
    }
    
    @objc static func requiresMainQueueSetup() -> Bool {
        return false
    }
}
