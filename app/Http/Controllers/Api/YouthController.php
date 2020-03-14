<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Youth;
use App\Temps;
use App\Milieu;
use App\Gender;

class YouthController extends Controller
{
    /**
     * Get youth population, time, gender, milieu group by time.
     *
     * @var string
     */
    public function population()
    {
        $youthPopulation = Youth::select('population', 'temps_idtemps', 'gender_idgender', 'milieu_idmilieu')
                                        ->groupBy('temps_idtemps', 'gender_idgender')
                                        ->get();   
        return response()->json(['status' => true, 'data' => $youthPopulation], 201);
    }

    /**
     * Get youth population, time, gender, milieu group by time.
     *
     * @var string
     */
    public function getMalePopulation()
    {
        $youthMalePopulation = Youth::select('population', 'temps_idtemps', 'gender_idgender')
                                        ->where('gender_idgender', 1)
                                        ->groupBy('temps_idtemps')
                                        ->get();   
        return response()->json(['status' => true, 'data' => $youthMalePopulation], 201);
    }

    /**
     * Get youth population, time, gender, milieu group by time.
     *
     * @var string
     */
    public function getFemalePopulation()
    {
        $youthFemalePopulation = Youth::select('population', 'temps_idtemps', 'gender_idgender')
                                        ->where('gender_idgender', 2)
                                        ->groupBy('temps_idtemps')
                                        ->get();   
        return response()->json(['status' => true, 'data' => $youthFemalePopulation], 201);
    }

    /**
     * Get Years value from dimension table.
     *
     * @var string
     */
    public function getYears()
    {
        $years = Temps::all();
        return response()->json(['status' => true, 'data' => $years], 201);
    }

    /**
     * Get Gender value from dimension table.
     *
     * @var string
     */
    public function getGender()
    {
        # code...
    }

    /**
     * Get Milieu value from dimension table.
     *
     * @var string
     */
    public function getMilieu()
    {
        # code...
    }
}
