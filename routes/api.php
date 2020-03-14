<?php


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::name('api.')->namespace('Api')->group(function () {
    // Unprotected routes
    Route::group(['middleware' => 'guest:api'], function () {
        Route::namespace('Auth')->group(function () {
            Route::post('signin', 'SignInController@signIn')->name('signin');
            Route::post('register', 'RegisterController@register')->name('register');

            // Password Reset Routes...
            Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail');
            Route::post('password/reset', 'ResetPasswordController@reset');

            // Socialite Login
            Route::post('google/signin', 'GoogleSignInController@SignIn');
        });
        // Dimension Tables
        Route::get('youth/dimension/years', 'YouthController@getYears')->name('years');
        // Reporting Routes
        Route::get('youth/population/', 'YouthController@population')->name('population');
        Route::get('youth/population/male', 'YouthController@getMalePopulation')->name('population_male');
        Route::get('youth/population/female', 'YouthController@getFemalePopulation')->name('population_female');
    });

    // Protected routes
    Route::middleware('auth:api')->group(function () {
        Route::namespace('Auth')->group(function () {
            Route::get('me', 'MeController@me')->name('me');
            Route::post('logout', 'LogoutController@logout')->name('logout');
        });
    });
});
