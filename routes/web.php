<?php

use Inertia\Inertia;
use App\Models\Certificate;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CertificateController;
use App\Http\Controllers\Dashboard\StudentController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Dashboard\DashboardCertificateController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('homepage');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

Route::controller(CertificateController::class)->group(function () {
    Route::post('/show', 'show')->middleware('valid')->name('certificate.validate');
    Route::post('/', 'exit')->name('exit');
});

Route::controller(AuthController::class)->group(function () {
    Route::get('/login', 'login')->name('login')->middleware('guest');
    Route::post('/login', 'authenticate')->name('authenticate');
    Route::post('/logout', 'logout')->name('logout')->middleware('auth');
});


// Route::post('/login', [AuthenticatedSessionController::class, 'store'])->name('authenticate');

Route::middleware('auth')->group(function () {
    Route::prefix('dashboard')->group(function () {
        Route::controller(DashboardController::class)->group(function () {
            Route::get('/', 'index')->name('dashboard');
        });
        Route::controller(StudentController::class)->group(function () {
            Route::get('/student', 'index')->name('student.index');
            Route::post('/student', 'store')->name('student.store');
        });
        Route::controller(DashboardCertificateController::class)->group(function () {
            Route::get('/certificate', 'index')->name('dashboard.certificate.index');
            Route::post('/certificate', 'store')->name('dashboard.certificate.store');
        });
    });
});

require __DIR__ . '/auth.php';
