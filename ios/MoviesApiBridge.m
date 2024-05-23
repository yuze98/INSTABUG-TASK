//
//  MoviesApiBridge.m
//  instabug_task
//
//  Created by Youssef Yuze on 23/05/2024.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(MoviesApi, NSObject)

RCT_EXTERN_METHOD(getMoviesListNative:(NSString *)url resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

@end
