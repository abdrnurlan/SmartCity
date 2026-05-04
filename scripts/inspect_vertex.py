import importlib
import os


def print_header(title: str) -> None:
    print(f"\n=== {title} ===")


def try_import(name: str):
    try:
        module = importlib.import_module(name)
        print(f"{name}: OK")
        return module
    except Exception as error:
        print(f"{name}: FAIL -> {error}")
        return None


def list_matching(module, keywords: tuple[str, ...]) -> None:
    matches = [name for name in dir(module) if any(keyword in name.lower() for keyword in keywords)]
    for name in matches[:80]:
        print(name)


print_header("Environment")
print(f"GOOGLE_APPLICATION_CREDENTIALS={os.environ.get('GOOGLE_APPLICATION_CREDENTIALS', '')}")

genai = try_import("google.genai")
vertexai = try_import("vertexai")
vision_models = try_import("vertexai.preview.vision_models")

if genai is not None:
    print_header("google.genai relevant names")
    list_matching(genai, ("video", "veo", "image", "client", "generate"))

if vision_models is not None:
    print_header("vertexai.preview.vision_models relevant names")
    list_matching(vision_models, ("video", "veo", "image", "generation"))

if vertexai is not None:
    print_header("vertexai init smoke test")
    try:
        vertexai.init(project="tokyo-crossbar-480311-d7")
        print("vertexai.init: OK")
    except Exception as error:
        print(f"vertexai.init: FAIL -> {error}")