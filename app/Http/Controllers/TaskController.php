<?php

namespace App\Http\Controllers;

use App\Http\Requests\TaskStoreRequest;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function index(Request $request)
    {
        $tasks = Task::query()
            ->when($request->has('search'), function ($query) use ($request) {
                $query->where('name', 'like', '%'.$request->search.'%');
            })
            ->paginate(5);

        return Inertia::render('Tasks/Index', [
            'tasks' => $tasks,
            'filters' => request()->only(['search'])
        ]);
    }

    public function create()
    {
        return Inertia::render('Tasks/Create');
    }

    public function store(TaskStoreRequest $request)
    {
        $data = $request->validated();
        $data['user_id'] = Auth::user()->id;
        Task::create($data);

        return redirect()->route('tasks.index');
    }

    public function show($id)
    {
        $task = Task::with('user')->findOrFail($id);
        return Inertia::render('Tasks/Show', [
            'task' => $task
        ]);
    }

    public function edit($id)
    {
        $task = Task::with('user')->findOrFail($id);
        return Inertia::render('Tasks/Edit', [
            'task' => $task
        ]);
    }

    public function update(TaskStoreRequest $request, $id)
    {
        $data = $request->validated();
        $task = Task::findOrFail($id);
        $task->update($data);

        return redirect()->route('tasks.index');
    }

    public function destroy(Request $request, $id)
    {
        $task = Task::findOrFail($id);
        $task->delete();

        return redirect()->route('tasks.index');
    }
}
