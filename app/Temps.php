<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Temps extends Model
{
    /**
     * The connection associated with the model.
     *
     * @var string
     */
    protected $connection = 'mysql2';
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'temps';
}
