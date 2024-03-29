class NotesController < ApplicationController
    def index
        render json: Note.all
    end

    def show
        note = Note.find_by_id(params[:id])
        if note
            render json: note
        else
            render json: {error: "Comment not found"}, status: :not_found
        end
    end

    def create
        new_note = Note.new(note_params)
        if new_note.save
            session[:note_id] = new_note.id
            render json: new_note, status: :created
        else
            render json: {errors: new_note.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        current_note = Note.find_by_id(params[:id])
            if current_note
                current_note.update(note_params)
        render json: current_note
        else
          render json: { "error": "Comment not found" }, status: :not_found
        end
    end

    def destroy
        current_note = Note.find_by_id(params[:id])
        current_note.destroy
        head :no_content
    end

    private

    def note_params
        params.permit(:note_date, :comments)
    end
end