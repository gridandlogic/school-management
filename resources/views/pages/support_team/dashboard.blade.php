@extends('layouts.master')
@section('page_title', 'Dashboard')
@section('content')

    <div class="gl-dashboard">
        <section class="gl-dashboard-hero">
            <div>
                <span class="gl-eyebrow">SCHOOL OVERVIEW</span>
                <h2>Welcome back, {{ Auth::user()->name }}</h2>
                <p>Keep your school day organized from one place.</p>
            </div>
            <img src="{{ asset('global_assets/images/grid-logic-badge.png') }}" alt="Grid & Logic" class="gl-dashboard-mark">
        </section>

    @if(Qs::userIsTeamSA())
        @php
            $studentCount = \App\Models\StudentRecord::count();
            $classCount = \App\Models\MyClass::count();
            $subjectCount = \App\Models\Subject::count();
            $staffCount = $users->whereIn('user_type', ['admin', 'super_admin', 'teacher', 'accountant', 'librarian'])->count();
        @endphp

        <div class="row gl-stat-grid">
            <div class="col-sm-6 col-xl-3 mb-3">
                <div class="gl-stat-card">
                    <span class="gl-stat-icon"><i class="icon-users"></i></span>
                    <span class="gl-stat-label">Student records</span>
                    <strong>{{ number_format($studentCount) }}</strong>
                    <span class="gl-stat-note">Students across the school</span>
                </div>
            </div>
            <div class="col-sm-6 col-xl-3 mb-3">
                <div class="gl-stat-card">
                    <span class="gl-stat-icon"><i class="icon-office"></i></span>
                    <span class="gl-stat-label">Classes</span>
                    <strong>{{ number_format($classCount) }}</strong>
                    <span class="gl-stat-note">Learning groups</span>
                </div>
            </div>
            <div class="col-sm-6 col-xl-3 mb-3">
                <div class="gl-stat-card">
                    <span class="gl-stat-icon"><i class="icon-book"></i></span>
                    <span class="gl-stat-label">Subjects</span>
                    <strong>{{ number_format($subjectCount) }}</strong>
                    <span class="gl-stat-note">Subjects in the curriculum</span>
                </div>
            </div>
            <div class="col-sm-6 col-xl-3 mb-3">
                <div class="gl-stat-card">
                    <span class="gl-stat-icon"><i class="icon-user-tie"></i></span>
                    <span class="gl-stat-label">Staff accounts</span>
                    <strong>{{ number_format($staffCount) }}</strong>
                    <span class="gl-stat-note">School team members</span>
                </div>
            </div>
        </div>

        <section class="gl-quick-panel">
            <div>
                <span class="gl-eyebrow gl-eyebrow-light">GET STARTED</span>
                <h3>Quick actions</h3>
                <p>Jump straight into the tasks you use most.</p>
            </div>
            <div class="gl-quick-actions">
                <a href="{{ route('students.create') }}" class="btn gl-btn-primary"><i class="icon-user-plus mr-2"></i>Admit a student</a>
                <a href="{{ route('classes.index') }}" class="btn gl-btn-light"><i class="icon-office mr-2"></i>Manage classes</a>
                <a href="{{ route('users.index') }}" class="btn gl-btn-light"><i class="icon-users4 mr-2"></i>Manage staff</a>
            </div>
        </section>
       @endif

    {{--Events Calendar Begins--}}
    <div class="card gl-calendar-card">
        <div class="card-header header-elements-inline">
            <div>
                <span class="gl-eyebrow gl-eyebrow-light">PLAN AHEAD</span>
                <h5 class="card-title mb-0 mt-1">School events</h5>
            </div>
         {!! Qs::getPanelOptions() !!}
        </div>

        <div class="card-body">
            <div class="fullcalendar-basic"></div>
        </div>
    </div>
    {{--Events Calendar Ends--}}
    </div>
    @endsection
